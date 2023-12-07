import {Request, Response} from 'express'
import {AbstractRequestHandler} from './AbstractRequestHandler'

export const handleRequest: <THandler extends AbstractRequestHandler<any, any, any, any, any>>
(HandlerConstructor: new(request: Request, response: Response) => THandler) =>
  (request: Request, response: Response, next: any) => Promise<void>

