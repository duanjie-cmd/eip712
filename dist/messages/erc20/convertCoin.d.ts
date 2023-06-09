export declare const MSG_CONVERT_COIN_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeCoin: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgConvertCoin(denom: string, amount: string, receiver: string, sender: string): {
    type: string;
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        receiver: string;
        sender: string;
    };
};
//# sourceMappingURL=convertCoin.d.ts.map