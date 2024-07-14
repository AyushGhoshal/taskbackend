const express = require('express');
const { addTask, getAllTasks, deleteTask, updateTask, getTaskById } = require('../controllers/task.controller');

const router = express.Router();

router.post('/tasks', addTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;