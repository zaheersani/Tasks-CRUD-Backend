const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
});

router.post('/', authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description, user: req.userId });
    await task.save();
    res.status(201).json(task);
});

router.put('/:id', authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(task);
});

router.delete('/:id', authMiddleware, async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task successfully deleted' });
});

module.exports = router;