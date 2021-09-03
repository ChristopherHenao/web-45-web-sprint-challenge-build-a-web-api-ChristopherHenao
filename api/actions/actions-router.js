// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const { validateActionsId, validateNewAction } = require('./actions-middlware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const actions = await Actions.get()
    try {
        res.json(actions)
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', validateActionsId, (req, res) => {
    res.json(req.action)
})

router.post('/', validateNewAction, async (req, res, next) => {
    const action = await Actions.insert(req.body)
    try {
        res.json(action)
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', (req, res, next) => {
    res.json('put actions is working')
})

router.delete('/:id', validateActionsId, async (req, res, next) => {
    try {
        await Actions.remove(req.params.id)
        res.status(200)
    }
    catch (error) {
        next(error)
    }
})




router.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message })
  });


module.exports = router