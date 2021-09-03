// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const { validateProjectId, validateNewProject, validateExistingProject } = require('./projects-middleware')

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

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project)
})

router.post('/', validateNewProject, async (req, res, next) => {
    const project = await Projects.insert(req.body)
    try {
        res.status(201).json(project)
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', validateProjectId, validateExistingProject, async (req, res, next) => {
    const updatedProject = await Projects.update(req.params.id, req.body)
    try {
        res.json(updatedProject)
    }
    catch (error) {
        next(error)
    }
})

router.delete('/:id', validateProjectId, async (req, res, next) => {
    try {
        await Projects.remove(req.params.id)
        res.status(200).json('deletion done')
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id/actions', validateProjectId, async (req, res, next) => {
    const projectActions = await Projects.getProjectActions(req.params.id)
    try {
        res.json(projectActions)
    }
    catch (error) {
        next(error)
    }
})

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message })
  });


module.exports = router