const {AxiosVerboseError} = require("@exp1/common-utils");

const defaultErrorInterceptor = (error) => {
    throw new AxiosVerboseError(error)
}

class AxiosApiClient {
    constructor(axiosInstance, errorInterceptor) {
        this.axiosInstance = axiosInstance
        this.errorInterceptor = errorInterceptor || defaultErrorInterceptor
    }

    async makeApiRequest (execute) {
        try {
            return await execute()
        } catch (error) {
            await this.errorInterceptor(error)
        }
    }

    get(url, config) {
        return this.makeApiRequest(() => this.axiosInstance.get(url, config))
    }

    delete(url, config) {
        return this.makeApiRequest(() => this.axiosInstance.delete(url, config))
    }

    put(url, data, config) {
        return this.makeApiRequest(() => this.axiosInstance.put(url, data, config))
    }

    post(url, data, config) {
        return this.makeApiRequest(() => this.axiosInstance.post(url, data, config))
    }

    patch(url, data, config) {
        return this.makeApiRequest(() => this.axiosInstance.patch(url, data, config))
    }
}

module.exports = {AxiosApiClient}
