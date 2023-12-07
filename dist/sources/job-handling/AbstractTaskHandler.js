const { AbstractJobHandler } = require("./AbstractJobHandler")

class AbstractTaskHandler extends AbstractJobHandler {
    constructor(event) {
        super()
        this.event = event
    }
}

module.exports = {AbstractTaskHandler}
