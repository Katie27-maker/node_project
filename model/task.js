const mongoose = require('mongoose')
const schema = mongoose.schema

const taskSchema = schema({
    task:{
        type:String,
        require:true
    },
    isComplete:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const Tsk = mongoose.model('Task',taskSchema);
module.exports = Task;