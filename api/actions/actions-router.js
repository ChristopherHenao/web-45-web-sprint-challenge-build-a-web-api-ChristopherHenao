// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const { validateActionsId } = require('./actions-middlware')

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

router.post('/', (req, res, next) => {
    res.json('post actions is working')
})

router.put('/:id', (req, res, next) => {
    res.json('put actions is working')
})

router.delete('/:id', (req, res, next) => {
    res.json('delete actions is working')
})




router.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message })
  });


module.exports = router