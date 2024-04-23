/* eslint-disable @typescript-eslint/no-explicit-any */
import {AbstractTaskHandler} from './AbstractTaskHandler'

export declare const handleTask: <THandler extends AbstractTaskHandler<any, any, any, any, any>>(
  HandlerConstructor: new (event: any) => THandler
) => (event: any) => Promise<void>
