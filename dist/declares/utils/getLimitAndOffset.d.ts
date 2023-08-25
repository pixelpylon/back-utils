import {DbData, EntityListParams} from 'common-utils'

export function getLimitAndOffset<Entity>(params: EntityListParams<DbData<Entity>>): {limit: number, offset?: number}
