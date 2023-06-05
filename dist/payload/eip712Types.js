export const newType = (name, type) => ({
    name,
    type,
});
export const typesAreEqual = (types1, types2) => {
    if (types1.length !== types2.length) {
        return false;
    }
    for (let i = 0; i < types1.length; i++) {
        if (types1[i].type !== types2[i].type ||
            types1[i].name !== types2[i].name) {
            return false;
        }
    }
    return true;
};
export const typeArrayAdjusted = (typeDef, isArray) => {
    if (isArray) {
        return `${typeDef}[]`;
    }
    return typeDef;
};
//# sourceMappingURL=eip712Types.js.map