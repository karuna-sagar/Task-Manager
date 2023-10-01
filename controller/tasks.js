const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    // res.status(200).json({ tasks });
    res.status(200).json({ tasks, value: tasks.length });


})
const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });


})
const getTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const tasks = await Task.findOne({ _id: taskID });
    if (!tasks) {
        return res.status(404).json({ msg: `No Task with id: ${taskID}` })
    }
    // res.status(200).json({ tasks });
    // res.status(200).json({ tasks });
    // res.status(200).json({ value: tasks.length, tasks });
    res.status(200).json({ status: 'success', data: { tasks, nbHits: tasks.length } });

})
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!tasks) {
        return res.status(404).json({ msg: `No Task with id: ${taskID}` })
    }
    res.status(200).json({ tasks })

})
const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const tasks = await Task.findOneAndDelete({ _id: taskID });
    if (!tasks) {
        return res.status(404).json({ msg: `No Task with id: ${taskID}` })
    }
    res.status(200).json({ tasks });


})

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}