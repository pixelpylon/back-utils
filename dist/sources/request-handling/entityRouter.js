const {Router} = require("express")
const {handleRequest} = require("./handleRequest")

const entityRouter = (entityName, handlers) => {
    const router = Router()

    if (handlers.List) router.get(`/${entityName}`, handleRequest(handlers.List))
    if (handlers.Item) router.get(`/${entityName}/:id`, handleRequest(handlers.Item))
    if (handlers.Create) router.post(`/${entityName}`, handleRequest(handlers.Create))
    if (handlers.Update) router.patch(`/${entityName}/:id`, handleRequest(handlers.Update))
    if (handlers.Remove) router.delete(`/${entityName}/:id`, handleRequest(handlers.Remove))

    return router
}

module.exports = {
    entityRouter,
}
