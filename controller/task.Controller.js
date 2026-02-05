const Task = require('../model/task');

const taskController = {}

taskController.createTask = async (req,res) => {

    try{
        const {task, isCompleted} = req.body;
        const newTask = new Task({task,isCompleted});
        await newTask.save();
        res.status(200).json({status : 'ok', data:newTask})
        
    }catch(err){
        res.status(499).json({status : 'Bad Request', error:err.message}) 
    }
}   


taskController.updateTask = async (req,res) => {
    try{
        const {id} = req.params;
        const {task,isCompleted} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id,{task,isCompleted},{new:true});
        res.status(200).json({status : 'ok', data:updatedTask})
    }catch(err){
        res.status(499).json({status : 'Bad Request', error:err.message})
    }   
}

taskController.deleteTask = async (req,res) => {
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({status : 'ok', message:'Task deleted successfully'})
        } catch (err) {
            res.status(499).json({ status: 'Bad Request', error: err.message });
        }
    };

module.exports = taskController;