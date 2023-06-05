import { FlattenPayloadResponse, JSONObject } from '../types.js';
export declare const createBaseTypes: () => {
    EIP712Domain: {
        name: string;
        type: string;
    }[];
    Tx: {
        name: string;
        type: string;
    }[];
    Fee: {
        name: string;
        type: string;
    }[];
    Coin: {
        name: string;
        type: string;
    }[];
};
declare const eip712Types: (flattenedPayload: FlattenPayloadResponse) => JSONObject;
export default eip712Types;
//# sourceMappingURL=parsePayload.d.ts.map