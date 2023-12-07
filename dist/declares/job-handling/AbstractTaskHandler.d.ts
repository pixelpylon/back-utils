import { AbstractJobHandler } from './AbstractJobHandler'

export abstract class AbstractTaskHandler<TContext, TUser, TInput, TResult, TError> 
extends AbstractJobHandler<TContext, TUser, TInput, TResult, TError> {
  readonly event: any // FIXME to EventContext from firebase-functions
  constructor(event: any)
}
