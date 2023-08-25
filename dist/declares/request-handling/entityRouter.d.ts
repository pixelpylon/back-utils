import {Request, Response, Router} from 'express'
import {AbstractRequestHandler} from './AbstractRequestHandler'


type HandlerConstructor = new (request: Request, response: Response) => AbstractRequestHandler<unknown, unknown, unknown, unknown, unknown>

type Handlers = {
  Create?: HandlerConstructor
  Update?: HandlerConstructor
  List?: HandlerConstructor
  Item?: HandlerConstructor
  Remove?: HandlerConstructor
}

export function entityRouter(entityName: string, handlers: Handlers): Router
