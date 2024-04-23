import {AbstractJobHandler} from './AbstractJobHandler'

export abstract class AbstractTaskHandler<TContext, TUser, TInput, TResult, TError> extends AbstractJobHandler<
  TContext,
  TUser,
  TInput,
  TResult,
  TError
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly event: any // FIXME to EventContext from firebase-functions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(event: any)
}
