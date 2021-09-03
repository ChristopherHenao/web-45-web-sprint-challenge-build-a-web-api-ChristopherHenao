// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const projects = await Projects.get()
    try {
        res.json(projects)
    }
    catch (error) {
        next(error)
    }
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





router.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message })
  });


module.exports = router