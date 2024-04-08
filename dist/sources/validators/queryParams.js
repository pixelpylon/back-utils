const { validate: v } = require('@exp1/common-utils')

const isLimit = v.optional(v.some(v.isNull, v.isIn))

const isFilter = v.props({
  field: v.isFilled,
  value: v.some(
    v.isString,
    v.isBoolean,
    v.isNumber,
    v.items(v.isString),
    v.items(v.isBoolean),
    v.items(v.isNumber),
  ),
  op: v.optional(v.isFilled)
})

const isFilters = v.optional(v.some(
  v.isNull,
  v.items(isFilter),
))

const isOrdering = v.optional(v.some(
  v.isNull,
  v.items(v.isFilled),
  v.items(v.props({
    field: v.isFilled,
    direction: v.optional(v.isIn(['asc', 'desc']))
  })),
))

const firstParams = v.props({
  filters: isFilters,
  oredering: isOrdering,
  views: v.optional(v.some(
    v.isNull,
    v.items(v.props({
      limit: isLimit,
      filters: isFilters,
      oredering: isOrdering,
    }))
  )),
  parallel: isFilters,
})

const listParams = v.props({
  limit: isLimit,
  filters: isFilters,
  oredering: isOrdering,
  views: v.optional(v.some(
    v.isNull,
    v.items(v.props({
      limit: isLimit,
      filters: isFilters,
      oredering: isOrdering,
    }))
  )),
  parallel: isFilters,
})

const paginatedListParams = v.props({
  limit: isLimit,
  filters: isFilters,
  oredering: isOrdering,
  cursor: v.optional(v.some(
    v.isNull,
    v.isFilled,
  ))
})

module.exports = {
  firstParams,
  listParams,
  paginatedListParams,
}
