const {AbstractRequestHandler} = require("../job-handling/AbstractRequestHandler");
const {RestifiedError} = require("@exp1/common-utils");

class AbstractRpcRequestHandler extends AbstractRequestHandler {
    async getClients() {
        return this.context.rpc_clients
    }

    async authenticateUser() {
        try {
            const clients = await this.getClients()
            const payload = this.request.headers.authorization.replace('Basic ', '');
            const [name, token] = new Buffer(payload, 'base64').toString('utf-8').split(':');
            for (const client of clients) {
                if (client.name === name && client.token === token) {
                    return client;
                }
            }
            throw new RestifiedError('Unauthorized', 403);
        } catch (error) {
            console.error(error);
            throw error instanceof RestifiedError
                ? error
                : new RestifiedError('Authorization error');
        }
    }

    async authorizeUser() {}

    onResult(result) {
        this.response.json(result)
    }

    onError(error) {
        console.error(error);
        return error instanceof RestifiedError
            ? this.response.status(error.code).send(error.message)
            : this.response.status(500).send('Processing error');
    }
}

module.exports = {AbstractRpcRequestHandler}
