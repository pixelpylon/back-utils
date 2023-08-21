import {AbstractRequestHandler} from '../request-handling/AbstractRequestHandler'

export type RpcClientConfigRecord = {
  name: string
  token: string
}

type Context = {
  rpc_clients: RpcClientConfigRecord[]
}

export abstract class AbstractRpcRequestHandler<TContext extends Context, TInput, TResult, TError>
  extends AbstractRequestHandler<TContext, RpcClientConfigRecord, TInput, TResult, TError> {
  getClients(): RpcClientConfigRecord[]
  authorizeUser(): Promise<void>
  authenticateUser(): Promise<RpcClientConfigRecord>
}
