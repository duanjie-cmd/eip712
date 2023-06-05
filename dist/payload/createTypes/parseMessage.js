import { newType, typeArrayAdjusted, typesAreEqual, } from '../eip712Types.js';
const TYPE_PREFIX = 'Type';
const ROOT_PREFIX = '_';
export const MAX_DUPL_TYPEDEFS = 1000;
const msgRootTypedef = (msg) => {
    const { type } = msg;
    if (typeof type !== 'string') {
        throw new TypeError(`field 'type' missing from msg: ${msg}`);
    }
    const tokens = type.split('/');
    const base = tokens[tokens.length - 1];
    return `${TYPE_PREFIX}${base}`;
};
const typeSanitized = (typeDef) => {
    let sanitized = '';
    const parts = typeDef.split('.');
    parts.forEach((part) => {
        if (part === ROOT_PREFIX) {
            sanitized += TYPE_PREFIX;
            return;
        }
        const subparts = part.split(ROOT_PREFIX);
        subparts.forEach((subpart) => {
            sanitized += subpart[0].toUpperCase() + subpart.substr(1);
        });
    });
    return sanitized;
};
const parseFieldAsArray = (params) => {
    const { key, value } = params;
    let inner = value;
    let typeForField;
    const isArray = Array.isArray(value);
    if (isArray) {
        inner = value[0];
        if (value.length === 0) {
            typeForField = newType(key, 'string[]');
        }
    }
    return {
        value: inner,
        isArray,
        typeForField,
    };
};
const typeAsEthPrimitive = (val) => {
    switch (typeof val) {
        case 'string':
            return 'string';
        case 'number':
            return 'int64';
        case 'boolean':
            return 'bool';
        default:
            return undefined;
    }
};
const parseFieldAsPrimitive = (params) => {
    const { key, value, isArray } = params;
    let typeDef = typeAsEthPrimitive(value);
    if (!typeDef) {
        return undefined;
    }
    typeDef = typeArrayAdjusted(typeDef, isArray);
    return newType(key, typeDef);
};
const parseFieldAsJSON = (fieldParams, payloadParams) => {
    const { key, value, isArray } = fieldParams;
    const { types, root, prefix } = payloadParams;
    const subPrefix = `${prefix}.${key}`;
    let typeDef = addPayloadTypes({
        types,
        payload: value,
        root,
        prefix: subPrefix,
    });
    typeDef = typeSanitized(typeDef);
    typeDef = typeArrayAdjusted(typeDef, isArray);
    return newType(key, typeDef);
};
const rootAdjustedTypedef = (prefix, root) => {
    if (prefix === ROOT_PREFIX) {
        return root;
    }
    return typeSanitized(prefix);
};
const addTypesToRoot = (root, key, newTypes) => {
    let typedef = '';
    let i = 0;
    for (; i < MAX_DUPL_TYPEDEFS; i++) {
        typedef = `${key}${i}`;
        const hasType = typedef in root;
        if (hasType && typesAreEqual(root[typedef], newTypes)) {
            return typedef;
        }
        if (!hasType) {
            break;
        }
    }
    if (i === MAX_DUPL_TYPEDEFS) {
        throw new Error('reached maximum number of duplicates for type');
    }
    root[typedef] = newTypes;
    return typedef;
};
const addPayloadTypes = (payloadParams) => {
    const { types, payload, root, prefix } = payloadParams;
    const keys = Object.keys(payload);
    keys.sort();
    keys.reverse();
    const newTypes = [];
    for (const key of keys) {
        let value = payload[key];
        let typeForField;
        let isArray;
        ({ isArray, value, typeForField } = parseFieldAsArray({ key, value }));
        if (typeForField) {
            newTypes.push(typeForField);
            continue;
        }
        if (Array.isArray(value)) {
            throw new Error('multi-dimensional arrays are not supported');
        }
        const fieldParams = { key, value, isArray };
        typeForField = parseFieldAsPrimitive(fieldParams);
        if (typeForField) {
            newTypes.push(typeForField);
            continue;
        }
        typeForField = parseFieldAsJSON(fieldParams, payloadParams);
        newTypes.push(typeForField);
    }
    const typedef = rootAdjustedTypedef(prefix, root);
    return addTypesToRoot(types, typedef, newTypes);
};
const addMsgTypes = (types, msg) => {
    if (!msg) {
        throw new TypeError(`expected JSON message, got ${msg}`);
    }
    const root = msgRootTypedef(msg);
    return addPayloadTypes({
        types,
        payload: msg,
        root,
        prefix: ROOT_PREFIX,
    });
};
export default addMsgTypes;
//# sourceMappingURL=parseMessage.js.map