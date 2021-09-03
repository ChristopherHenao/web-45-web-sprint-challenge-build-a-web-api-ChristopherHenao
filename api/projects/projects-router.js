// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json("get projects is working")
})

router.get('/:id', (req, res, next) => {
    res.json("get projects by id is working")
})

router.post('/', (req, res, next) => {
    res.json("post projects is working")
})

router.put('/:id', (req, res, next) => {
    res.json("put projects is working")
})

router.delete('/:id', (req, res, next) => {
    res.json("delete projects is working")
})

router.get('/:id/actions', (req, res, next) => {
    res.json("get project/:id/ actions is working")
})


module.exports = router