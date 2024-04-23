const {validate} = require('@exp1/common-utils')

const ssoConfig = validate.props({
  domain: validate.isFilled,
  serviceId: validate.optional(validate.isFilled),
  serviceKey: validate.optional(validate.isFilled),
})

module.exports = {ssoConfig}
