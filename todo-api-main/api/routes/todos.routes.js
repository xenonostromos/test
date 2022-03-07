const express = require('express')
const router = express.Router()

// Controllers
const {getAllTodos, createTodo, updateTodo, deleteTodo} = require('../controllers/todos.controllers')

// GET http://localhost:4000/api/v1/todos
router.get('/', getAllTodos);

// POST http://localhost:4000/api/v1/todos
router.post('/', createTodo);

// PATCH http://localhost:4000/api/v1/todos:id
router.patch('/:id', updateTodo);

// DELETE or soft delete http://localhost:4000/api/v1/todos
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router }