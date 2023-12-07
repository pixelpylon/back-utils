const handleRequest = (HandlerConstructor) => {
  return async (...args) => {
    const handler = new HandlerConstructor(...args)
    await handler.handle()
  }
}

module.exports = {handleRequest}
