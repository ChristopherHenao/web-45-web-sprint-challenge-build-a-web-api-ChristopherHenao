// add middlewares here related to actions
const Actions = require('./actions-model')
const Projects = require('../projects/projects-model')

async function validateActionsId(req, res, next) {
    const action = await Actions.get(req.params.id)
    try {
        if (!action) {
            next({ status: 404 })
        }
        else {
            req.action = action
            next()
        }
    }
    catch (error) {
        next(error)
    }
}

async function validateNewAction(req, res, next) {
    const { project_id, description, notes } = req.body
    const project = await Projects.get(project_id)
    try {
        if (!description || !notes || !project_id) {
            next({ status: 400 })
        }
        else if (description.length > 128) {
            next({ status: 400 })
        }
        else if (!project) {
            next({ status: 404 })
        }
        else {
            next()
        }
    }
    catch (error) {
        next(error)
    }
}

module.exports = { validateActionsId, validateNewAction }