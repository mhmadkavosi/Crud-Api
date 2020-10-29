const mongoose = require('mongoose');

const taskShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!"],
        maxlength:[120,"a name must less or equal then 120 chr"],
        minlength:[40,"a name must less or equal then 40 chr"]
    },
    sumery:{
        type:String,
        required:[true,"Name is required!"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    }
});


const Task = mongoose.model('Task',taskShema);

module.exports = Task;