const TaskService = require('../services/task.service.js');

const taskService = new TaskService();

const addTask = async (req,res) => {
    try {
        const response = await taskService.addTask({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate
        });
        return res.status(201).json({
            success: true,
            message: 'Task has been added successfully',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to add task please try again later!',
            data: {},
            err: error
        });
    }
}

const getAllTasks = async (req,res) => {
    try {
        const response = await taskService.getTasks();
        return res.status(200).json({
            success: true,
            message: 'Tasks has been fetched successfully',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to fetch tasks please try again later!',
            data: {},
            err: error
        });
    }
}

const deleteTask = async (req,res) => {
    try {
        await taskService.deleteTask(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted the task',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to delete the task',
            err: error
        });
    }
}

const updateTask = async (req,res) => {
    try {
        const response = await taskService.updateTask(req.params.id, req.body.data);
        return res.status(200).json({
            success: true,
            message: 'Successfully updated the task',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to update the task',
            err: error
        });
    }
}

const getTaskById = async (req,res) => {
    try {
        const response = await taskService.getTaskById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Task has been fetched successfully',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to fetch tasks please try again later!',
            data: {},
            err: error
        });
    }
}

module.exports = {
    addTask,
    getAllTasks,
    deleteTask,
    updateTask,
    getTaskById
}