const {validate} = require('common-utils')

const rpcClients = validate.items(validate.props({
  name: validate.isFilled,
  token: validate.isFilled,
}))

module.exports = {rpcClients}
