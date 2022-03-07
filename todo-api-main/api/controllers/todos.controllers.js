// Models
const { ToDo } = require('../models/todo.model');

// Utils
const { filterObj } = require('../utils/filterObj');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todo = await ToDo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        todo
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Create Todo
exports.createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newTodo = await ToDo.create({
      title: title,
      content: content
    });

    res.status(201).json({
      status: 'success',
      data: { newTodo }
    });
  } catch (error) {
    console.log(error);
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filterObj(req.body, 'title', 'content'); // { title } | { title, author } | { content }

    const todo = await ToDo.findOne({
      where: { id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update post, invalid ID'
      });
      return;
    }

    await todo.update({ ...data }); // .update({ title, author })

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await ToDo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete post, invalid ID'
      });
      return;
    }

    // Soft delete
    await todo.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
