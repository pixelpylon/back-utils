const {Router} = require("express")
const {handleRequest} = require("./handleRequest")

const entityRouter = (handlers) => {
    const router = Router()

    if (handlers.List) router.get('/', handleRequest(handlers.List))
    if (handlers.Item) router.get('/:id', handleRequest(handlers.Item))
    if (handlers.Create) router.post('/', handleRequest(handlers.Create))
    if (handlers.Update) router.patch('/:id', handleRequest(handlers.Update))
    if (handlers.Remove) router.delete('/:id', handleRequest(handlers.Remove))

    return router
}

module.exports = {
    entityRouter,
}
