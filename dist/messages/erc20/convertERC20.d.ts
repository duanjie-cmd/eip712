export declare const MSG_CONVERT_ERC20_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgConvertERC20(contractAddress: string, amount: string, receiver: string, sender: string): {
    type: string;
    value: {
        contract_address: string;
        amount: string;
        receiver: string;
        sender: string;
    };
};
//# sourceMappingURL=convertERC20.d.ts.map