const {validate} = require('common-utils')

const ssoConfig = validate.props({
  domain: validate.isFilled,
  serviceId: validate.optional(validate.isFilled),
  serviceKey: validate.optional(validate.isFilled),
})

module.exports = {ssoConfig}
