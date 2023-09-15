const getListParams = (query) => {
    return {
        limit: typeof query.limit === 'string' ? parseInt(query.limit, 10) : undefined,
        cursor: query.cursor,
        ordering: typeof query.ordering === 'string' ? JSON.parse(query.ordering) : undefined,
        filters: typeof query.filters === 'string' ? JSON.parse(query.filters) : undefined,
    }
}

module.exports = {
    getListParams,
}
