export const CREATE_IBC_MSG_NFT_TRANSFER_TYPES = (memo?: string) => ({
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
})

export function createIBCMsgNftTransfer(
  receiver: string,
  sender: string,
  sourceChannel: string,
  sourcePort: string,
  revisionHeight: number,
  revisionNumber: number,
  timeoutTimestamp: string,
  classId: string,
  tokenIds: string[],
  memo?: string,
) {
  /* eslint-disable camelcase */
  return {
    type: 'cosmos-sdk/MsgTransferNFT', // todo dj
    value: {
      receiver,
      sender,
      source_channel: sourceChannel,
      source_port: sourcePort,
      timeout_height: {
        revision_height: revisionHeight.toString(),
        revision_number: revisionNumber.toString(),
      },
      timeout_timestamp: timeoutTimestamp,
      class_id: classId,
      token_ids: tokenIds,
      ...(memo && { memo }),
    },
  }
}
