import {Request, Response} from 'express'
import { AbstractJobHandler } from './AbstractJobHandler'

export abstract class AbstractRequestHandler<TContext, TUser, TInput, TResult, TError> 
extends AbstractJobHandler<TContext, TUser, TInput, TResult, TError> {
  readonly request: Request
  readonly response: Response
  constructor(request: Request, response: Response)
}
