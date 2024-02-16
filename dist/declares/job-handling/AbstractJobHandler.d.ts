export abstract class AbstractJobHandler<TContext, TUser, TInput, TResult, TError> {
  private _context?: TContext
  protected get context(): TContext
  protected get user(): TUser
  handle(): Promise<void>
  abstract getInput(): any
  abstract validateInput(input: any): void
  abstract initializeContext(): Promise<TContext>
  abstract authenticateUser(): Promise<TUser>
  abstract authorizeUser(): void
  abstract getResult(input: TInput): Promise<TResult>
  abstract onResult(result: TResult): Promise<void>
  abstract onError(error: TError): Promise<void>
}
