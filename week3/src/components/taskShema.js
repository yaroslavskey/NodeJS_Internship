const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const taskSchema = new Schema({
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});

const TasksDB = mongoose.model('tasks', taskSchema);

module.exports = TasksDB;
