const getLimitAndOffset = ({limit, page}) => {
    return {
        limit,
        offset: page !== undefined && limit !== undefined ? (page - 1) * limit : undefined,
    }
}

module.exports = {
    getLimitAndOffset,
}
