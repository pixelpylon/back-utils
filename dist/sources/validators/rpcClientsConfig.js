const {validate} = require('@exp1/common-utils')

const rpcClientsConfig = validate.items(validate.props({
  name: validate.isFilled,
  token: validate.isFilled,
}))

module.exports = {rpcClientsConfig}
