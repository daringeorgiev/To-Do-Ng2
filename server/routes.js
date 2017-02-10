const router = require('express').Router();

router.get('/todos', function (req, res) {
  res.send('get toDos')
});

router.get('/todos/:id', function (req, res) {
  res.send('get toDos by id')
});

router.post('/todos', function (req, res) {
  res.send('post toDos')
});

router.put('/todos/:id', function (req, res) {
  res.send('put toDos')
});

router.delete('/todos/:id', function (req, res) {
  res.send('delete toDos')
});

router.get('/', function (req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

module.exports = router