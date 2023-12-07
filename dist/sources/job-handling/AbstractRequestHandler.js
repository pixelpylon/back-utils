const { AbstractJobHandler } = require("./AbstractJobHandler")

class AbstractRequestHandler extends AbstractJobHandler {
    constructor(request, response) {
        super()
        this.request = request
        this.response = response
    }
}

module.exports = {AbstractRequestHandler}
