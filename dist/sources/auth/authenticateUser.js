const axios = require("axios");
const {ServiceError} = require("common-utils");

const SESSION_COOKIE = '__session'

const authenticateUser = async (ssoConfig, sessionCookieValue) => {
    if (!ssoConfig.domain) {
        throw new ServiceError(`SSO domain is not passed`)
    }

    if (!ssoConfig.serviceKey) {
        throw new ServiceError(`Service key must be passed`)
    }

    const response = await axios.create().post(
        `https://${ssoConfig.domain}/api/iam`,
        {serviceKey: ssoConfig.serviceKey},
        {headers: {Cookie: `${SESSION_COOKIE}=${sessionCookieValue}`}}
    )

    return response.data
}

module.exports = {
    authenticateUser,
    SESSION_COOKIE,
}
