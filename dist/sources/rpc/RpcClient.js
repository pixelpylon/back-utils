const axios = require("axios");
const {AxiosVerboseError} = require("common-utils");

class RpcClient {
  constructor (url) {
    const parsedUrl = new URL(url);

    const payload = Buffer
      .from(`${parsedUrl.username}:${decodeURIComponent(parsedUrl.password)}`)
      .toString('base64');

    this.instance = axios.create({
      baseURL: `${parsedUrl.protocol}//${parsedUrl.host}`,
      headers: {Authorization: `Basic ${payload}`}
    });
  }

  async safeCall (method, params) {
    try {
      const {data} = await this.instance.post(method, params);
      return {result: data};
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {error: new AxiosVerboseError(error)};
      }

      return {error};
    }
  }

  async unsafeCall (method, params) {
    try {
      const {data} = await this.instance.post(method, params);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AxiosVerboseError(error);
      }

      throw error;
    }
  }
}

RpcClient.new = (url) => {
  return new RpcClient(url);
};

module.exports = {RpcClient};


