import {DbData, EntityListParams} from '@exp1/common-utils'

export function getLimitAndOffset<Entity>(params: EntityListParams<DbData<Entity>>): {limit: number, offset?: number}
