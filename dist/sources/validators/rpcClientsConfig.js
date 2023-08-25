const {validate} = require('common-utils')

const rpcClientsConflict = validate.items(validate.props({
  name: validate.isFilled,
  token: validate.isFilled,
}))

module.exports = {rpcClientsConflict}
