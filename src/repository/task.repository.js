const { Task } = require("../models");
const CrudRepository = require("./crud.repository");

class TaskRepository extends CrudRepository {
    constructor(){
        super(Task)
    }
}
module.exports = TaskRepository;