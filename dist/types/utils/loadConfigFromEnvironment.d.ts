import {Validator} from '@exp1/common-utils'

type CONFIG_PROPERTY_TYPES_UNION = 'string' | 'int' | 'json' | 'bool'

export declare const CONFIG_PROPERTY_TYPES: {
  readonly STRING: 'string'
  readonly INT: 'int'
  readonly JSON: 'json'
  readonly BOOL: 'bool'
}

export type ExtendedPropertyDescriptor = {
  type: CONFIG_PROPERTY_TYPES_UNION
  validator: Validator
}

export type PropertyDescriptor = CONFIG_PROPERTY_TYPES_UNION | ExtendedPropertyDescriptor

export declare function loadConfigFromEnvironment<T>(descriptor: Record<string, PropertyDescriptor>): T
