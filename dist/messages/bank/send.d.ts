export declare const MSG_SEND_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeAmount: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgSend(amount: string, denom: string, fromAddress: string, toAddress: string): {
    type: string;
    value: {
        amount: {
            amount: string;
            denom: string;
        }[];
        from_address: string;
        to_address: string;
    };
};
//# sourceMappingURL=send.d.ts.map