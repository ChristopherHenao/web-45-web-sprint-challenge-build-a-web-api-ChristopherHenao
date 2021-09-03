// add middlewares here related to projects


function logger(req, res, next) {
    console.log(`[${new Date()}] ${req.method} ${req.url}`)
    next()
}

module.exports = { logger }