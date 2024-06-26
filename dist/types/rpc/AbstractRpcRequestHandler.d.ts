import {AbstractRequestHandler} from '../job-handling'

export type RpcClientConfigRecord = {
  name: string
  token: string
}

type Context = {
  RPC_CLIENTS: RpcClientConfigRecord[]
}

export abstract class AbstractRpcRequestHandler<
  TContext extends Context,
  TInput,
  TResult,
  TError,
> extends AbstractRequestHandler<TContext, RpcClientConfigRecord, TInput, TResult, TError> {
  getClients(): RpcClientConfigRecord[]
  authorizeUser(): Promise<void>
  authenticateUser(): Promise<RpcClientConfigRecord>
}
