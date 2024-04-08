const getListParams = (query) => {
    return typeof query.q === 'string' ? JSON.parse(query.q) : {}
}

module.exports = {
    getListParams,
}
