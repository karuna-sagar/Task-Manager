const getAllTasks = (req, res) => {
    res.send('get all items');
}
const createTask = (req, res) => {
    res.json(req.body);
}
const getTask = (req, res) => {
    res.json({ id: req.params.id });
}
const updateTask = (req, res) => {
    res.send('update items');
}
const deleteTask = (req, res) => {
    res.send('delete items');
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}