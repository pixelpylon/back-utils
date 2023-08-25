import {Request, Response} from 'express'

export abstract class AbstractRequestHandler<TContext, TUser, TInput, TResult, TError> {
  readonly request: Request
  readonly response: Response
  private _context?: TContext
  constructor(request: Request, response: Response)
  protected get context(): TContext

  protected get user(): TUser
  handle(): Promise<void>
  abstract getInput(): TInput
  abstract validateInput(input: TInput): void
  abstract initializeContext(): Promise<TContext>
  abstract authenticateUser(): Promise<TUser>
  abstract authorizeUser(): void
  abstract getResult(input: TInput): Promise<TResult>
  abstract onResult(result: TResult): Promise<void>
  abstract onError(error: TError): Promise<void>
}
