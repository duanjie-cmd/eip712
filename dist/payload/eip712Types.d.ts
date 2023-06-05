export interface EIP712Type {
    name: string;
    type: string;
}
export declare const newType: (name: string, type: string) => EIP712Type;
export declare const typesAreEqual: (types1: EIP712Type[], types2: EIP712Type[]) => boolean;
export declare const typeArrayAdjusted: (typeDef: string, isArray: boolean | undefined) => string;
//# sourceMappingURL=eip712Types.d.ts.map