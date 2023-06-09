export declare function decodeSignDocToTypedData(bytes: Uint8Array): {
    types: object;
    primaryType: string;
    domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
        salt: string;
    };
    message: object;
};
export declare function hashEIP712(eip712: any): {
    domain: Buffer;
    message: Buffer;
};
//# sourceMappingURL=encoding.d.ts.map