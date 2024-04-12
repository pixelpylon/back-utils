const axios = require('axios')
const {ServiceError, RestifiedError} = require('@exp1/common-utils')

const SESSION_COOKIE = '__session'

const authenticateUser = async (ssoConfig, sessionCookieValue) => {
  if (!ssoConfig.domain) {
    throw new ServiceError(`SSO domain is not passed`)
  }

  if (!ssoConfig.serviceKey && !ssoConfig.serviceId) {
    throw new ServiceError(`Service key must be passed`)
  }

  try {
    const response = await axios
      .create()
      .post(
        `https://${ssoConfig.domain}/api/iam`,
        {serviceKey: ssoConfig.serviceKey, serviceId: ssoConfig.serviceId},
        {headers: {Cookie: `${SESSION_COOKIE}=${sessionCookieValue}`}}
      )

    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      throw new RestifiedError('Unauthorized', 401)
    }

    if (error.response.status === 403) {
      throw new RestifiedError('Forbidden', 403)
    }

    throw error
  }
}

module.exports = {
  authenticateUser,
  SESSION_COOKIE,
}
