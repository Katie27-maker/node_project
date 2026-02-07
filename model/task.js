const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{
        type:String,
        require:true
    },
    isComplete:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;