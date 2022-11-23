const {AxiosVerboseError} = require("common-utils");

const makeApiRequest = async (execute) => {
    try {
        return await execute()
    } catch (error) {
        throw new AxiosVerboseError(error)
    }
}

const AxiosApiClient = (axiosInstance) => {
    return {
        instance: axiosInstance,
        get: (url, config) => makeApiRequest(() => axiosInstance.get(url, config)),
        delete: (url, config) => makeApiRequest(() => axiosInstance.delete(url, config)),
        put: (url, data, config) => makeApiRequest(() => axiosInstance.put(url, data, config)),
        post: (url, data, config) => makeApiRequest(() => axiosInstance.post(url, data, config)),
        patch: (url, data, config) => makeApiRequest(() => axiosInstance.patch(url, data, config)),
    }
}

module.exports = AxiosApiClient
