import { Query } from 'express-serve-static-core'
import {EntityListParams} from 'common-utils'

export function getListParams<Entity>(query: Query): EntityListParams<Entity>
