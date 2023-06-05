export const CREATE_IBC_MSG_NFT_TRANSFER_TYPES = (memo) => ({
    MsgValue: [
        { name: 'source_port', type: 'string' },
        { name: 'source_channel', type: 'string' },
        { name: 'class_id', type: 'string' },
        { name: 'token_ids', type: 'string[]' },
        { name: 'sender', type: 'string' },
        { name: 'receiver', type: 'string' },
        { name: 'timeout_height', type: 'TypeTimeoutHeight' },
        { name: 'timeout_timestamp', type: 'uint64' },
        ...(memo ? [{ name: 'memo', type: 'string' }] : []),
    ],
    TypeTimeoutHeight: [
        { name: 'revision_number', type: 'uint64' },
        { name: 'revision_height', type: 'uint64' },
    ],
});
export function createIBCMsgNftTransfer(receiver, sender, sourceChannel, sourcePort, revisionHeight, revisionNumber, timeoutTimestamp, classId, tokenIds, memo) {
    console.log(revisionHeight);
    return {
        type: 'cosmos-sdk/MsgTransferNFT',
        value: Object.assign({ receiver,
            sender, source_channel: sourceChannel, source_port: sourcePort, timeout_height: {
                revision_height: revisionHeight.toString(),
                revision_number: revisionNumber.toString(),
            }, timeout_timestamp: timeoutTimestamp, class_id: classId, token_ids: tokenIds }, (memo && { memo })),
    };
}
//# sourceMappingURL=nft_transfer.js.map