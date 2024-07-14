const TaskRepository = require("../repository/task.repository.js");

class TaskService {
    constructor(){
        this.taskRepository = new TaskRepository();
    }

    async addTask(taskData){
        try {
            const tasks = await this.taskRepository.create(taskData);
            return tasks;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTasks(){
        try {
            const tasks = await this.taskRepository.getAll();
            return tasks;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateTask(taskId, newTaskData){
        try {
            const updatedTask = await this.taskRepository.update(taskId, newTaskData);
            return updatedTask;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteTask(taskId){
        try {
            const isDeleted  = await this.taskRepository.destroy(taskId);
            return isDeleted;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTaskById (taskId){
        try {
            const task = await this.taskRepository.get(taskId);
            return task;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TaskService;