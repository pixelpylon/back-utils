const {mailerConfig} = require('./mailerConfig')
const {ssoConfig} = require('./ssoConfig')
const {rpcClientsConfig} = require('./rpcClientsConfig')
const {firstParams, listParams, paginatedListParams} = require('./queryParams')

module.exports = {
    mailerConfig,
    ssoConfig,
    rpcClientsConfig,
    firstParams, 
    listParams, 
    paginatedListParams,
}
