const {validate} = require('common-utils')

const mailerConfig = validate.props({
  url: validate.isUrl,
  bcc: validate.optional(validate.isEmail),
  replyTo: validate.optional(validate.isEmail),
  fromSender: validate.isFilled,
  fromAddress: validate.isEmail,
})

module.exports = {mailerConfig}
