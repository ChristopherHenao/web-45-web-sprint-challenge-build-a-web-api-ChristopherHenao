// add middlewares here related to actions
const Actions = require('./actions-model')

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

module.exports = { validateActionsId }