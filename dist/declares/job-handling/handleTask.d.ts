import {AbstractTaskHandler} from './AbstractTaskHandler'

export const handleTask: <THandler extends AbstractTaskHandler<any, any, any, any, any>>
(HandlerConstructor: new(event: any) => THandler) =>
  (event: any) => Promise<void>

