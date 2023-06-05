export declare const CREATE_IBC_MSG_NFT_TRANSFER_TYPES: (memo?: string) => {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeTimeoutHeight: {
        name: string;
        type: string;
    }[];
};
export declare function createIBCMsgNftTransfer(receiver: string, sender: string, sourceChannel: string, sourcePort: string, revisionHeight: number, revisionNumber: number, timeoutTimestamp: string, classId: string, tokenIds: string[], memo?: string): {
    type: string;
    value: {
        memo?: string | undefined;
        receiver: string;
        sender: string;
        source_channel: string;
        source_port: string;
        timeout_height: {
            revision_height: string;
            revision_number: string;
        };
        timeout_timestamp: string;
        class_id: string;
        token_ids: string[];
    };
};
//# sourceMappingURL=nft_transfer.d.ts.map