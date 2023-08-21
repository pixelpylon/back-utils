import {AbstractRequestHandler} from './AbstractRequestHandler'

export const handleRequest: <THandler extends AbstractRequestHandler<any, any, any, any, any>, THandleConstructorArgs extends any[]>
(HandlerConstructor: new(...args: THandleConstructorArgs) => THandler) =>
  (...args: THandleConstructorArgs) => Promise<void>

