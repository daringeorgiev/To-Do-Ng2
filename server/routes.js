const router = require('express').Router();
const todoController = require('./todos/controller');

router.get('/todos', todoController.getAllTodos);

router.get('/todos/:id', todoController.getTodoById);

router.post('/todos', todoController.createTodo);

router.put('/todos/:id', todoController.updateTodo);

router.delete('/todos/:id', todoController.deleteTodo);

router.get('/', function (req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

module.exports = router