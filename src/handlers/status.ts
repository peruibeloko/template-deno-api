import * as Status from 'c/StatusClient.ts';

export const getStatus = (status: number) => {
  return Status.getStatus(status);
};
