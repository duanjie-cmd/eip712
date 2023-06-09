export declare const MSG_VOTE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgVote(proposalId: number, option: number, sender: string): {
    type: string;
    value: {
        proposal_id: number;
        voter: string;
        option: number;
    };
};
//# sourceMappingURL=vote.d.ts.map