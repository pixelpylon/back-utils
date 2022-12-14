export abstract class AbstractRequestHandler<TContext, TInput, TResult, TError> {
  private _context?: TContext
  protected constructor()
  protected get context(): TContext
  initializeContext(): Promise<void>
  handle(): Promise<void>
  abstract getInput(): TInput
  abstract validateInput(input: TInput): void
  abstract createContext(): Promise<TContext>
  abstract getResult(input: TInput): Promise<TResult>
  abstract onResult(result: TResult): Promise<void>
  abstract onError(error: TError): Promise<void>
}
