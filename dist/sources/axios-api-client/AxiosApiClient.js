const {AxiosVerboseError} = require("common-utils");

const makeApiRequest = async (execute) => {
    try {
        return await execute()
    } catch (error) {
        throw new AxiosVerboseError(error)
    }
}

class AxiosApiClient {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance
    }

    get(url, config) {
        return makeApiRequest(() => this.axiosInstance.get(url, config))
    }

    delete(url, config) {
        return makeApiRequest(() => this.axiosInstance.delete(url, config))
    }

    put(url, data, config) {
        return makeApiRequest(() => this.axiosInstance.put(url, data, config))
    }

    post(url, data, config) {
        return makeApiRequest(() => this.axiosInstance.post(url, data, config))
    }

    patch(url, data, config) {
        return makeApiRequest(() => this.axiosInstance.patch(url, data, config))
    }
}

module.exports = AxiosApiClient
