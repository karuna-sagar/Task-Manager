const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    // res.status(200).json({ tasks });
    res.status(200).json({ tasks, value: tasks.length });


})
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }

}
const getTask = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const tasks = await Task.findOne({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ msg: `No Task with id: ${taskID}` })
        }
        res.status(200).json({ tasks });
        // res.status(200).json({ tasks });
        // res.status(200).json({ value: tasks.length, tasks });
        res.status(200).json({ status: 'success', data: { tasks, nbHits: tasks.length } });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}
const updateTask = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!tasks) {
            return res.status(404).json({ msg: `No Task with id: ${taskID}` })
        }
        res.status(200).json({ tasks })
    }
    catch {
        res.status(500).json({ msg: error })
    }
    res.send('update items');
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const tasks = await Task.findOneAndDelete({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ msg: `No Task with id: ${taskID}` })
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }

}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}