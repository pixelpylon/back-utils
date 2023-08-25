class AbstractRequestHandler {
    constructor(request, response) {
        this.request = request
        this.response = response
    }

    get context() {
        if (!this._context) {
            throw new Error("Handler context isn't initialized")
        }

        return this._context
    }

    get user() {
        if (!this._user) {
            throw new Error("Handler user isn't initialized")
        }

        return this._user
    }

    async handle() {
        try {
            this._context = await this.initializeContext()
            this._user = await this.authenticateUser()
            await this.authorizeUser()
            const input = this.getInput()
            this.validateInput(input)
            const result = await this.getResult(input)
            await this.onResult(result)
            return result
        } catch (error) {
            await this.onError(error)
        }
    }

    getInput() {
        throw new Error(`Not implemented abstract method getInput()`)
    }

    authenticateUser() {
        throw new Error(`Not implemented abstract method authenticateUser()`)
    }

    authorizeUser() {
        throw new Error(`Not implemented abstract method authorizeUser()`)
    }

    validateInput(input) {
        throw new Error(`Not implemented abstract method validateInput()`)
    }

    initializeContext() {
        throw new Error(`Not implemented abstract method initializeContext()`)
    }

    getResult(input) {
        throw new Error(`Not implemented abstract method getResult()`)
    }

    onResult(result) {}

    onError(error) {
        throw new Error(`Not implemented abstract method onError()`)
    }
}

module.exports = {AbstractRequestHandler}
