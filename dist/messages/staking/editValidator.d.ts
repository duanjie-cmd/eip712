export declare const MSG_EDIT_VALIDATOR_TYPES: {
    TypeDescription: {
        name: string;
        type: string;
    }[];
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export interface MsgEditValidatorInterface {
    type: string;
    value: {
        validator_address: string;
    };
}
export declare function createMsgEditValidator(moniker: string | undefined, identity: string | undefined, website: string | undefined, securityContact: string | undefined, details: string | undefined, validatorAddress: string | undefined, commissionRate: string | undefined, minSelfDelegation: string | undefined): {
    type: string;
    value: {
        description: {
            moniker: string;
            identity: string;
            website: string;
            security_contact: string;
            details: string;
        };
        validator_address: string | undefined;
        commission_rate: string;
        min_self_delegation: string;
    };
};
//# sourceMappingURL=editValidator.d.ts.map