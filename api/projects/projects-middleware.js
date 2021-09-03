// add middlewares here related to projects
const Projects = require('./projects-model')


function logger(req, res, next) {
    console.log(`[${new Date()}] ${req.method} ${req.url}`)
    next()
}

async function validateProjectId(req, res, next) {
    const project = await Projects.get(req.params.id)
    try {
        if (!project) {
            next({ status: 404 })
        }
        else {
            req.project = project
            next()
        }
    }
    catch (error) {
        next(error)
    }
}

module.exports = { logger, validateProjectId }