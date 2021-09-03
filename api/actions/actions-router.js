// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('get actions is working')
})

router.get('/:id', (req, res, next) => {
    res.json('get actions by id is working')
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