const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

router.get('/', (req, res)=> {
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/', (req, res)=> {
    const { title, description } = req.body;

    const newTask = taskController.createTask(title, description);
    res.status(200).json(newTask);
});

router.delete('/:id', (req, res)=>{
    taskController.deleteTask(req.params.id);
    const msj = {
        msj: `Elemento ${req.params.id} eliminado` 
    }
    res.status(200).json(msj);
});

router.put('/:id', (req, res)=>{
    const { title, description } = req.body;
    newTask = taskController.updateTask(req.params.id, title, description);
    res.status(200).json(newTask);
})

module.exports = router;