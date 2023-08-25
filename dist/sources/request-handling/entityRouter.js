const {Router} = require("express")

const entityRouter = (entityName, handlers) => {
    const router = Router()

    if (handlers.List) router.get(`/api/${entityName}`, handleRequest(handlers.List))
    if (handlers.Item) router.get(`/api/${entityName}/:id`, handleRequest(handlers.Item))
    if (handlers.Create) router.post(`/api/${entityName}`, handleRequest(handlers.Create))
    if (handlers.Update) router.patch(`/api/${entityName}/:id`, handleRequest(handlers.Update))
    if (handlers.Remove) router.delete(`/api/${entityName}/:id`, handleRequest(handlers.Remove))

    return router
}

module.exports = {
    entityRouter,
}
