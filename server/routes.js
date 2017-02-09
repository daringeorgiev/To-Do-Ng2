const router = require('express').Router();

router.get('/api/toDos', function (req, res) {
  res.send('get toDos')
});

router.get('/api/toDos/:id', function (req, res) {
  res.send('get toDos by id')
});

router.post('/api/toDos', function (req, res) {
  res.send('post toDos')
});

router.put('/api/toDos/:id', function (req, res) {
  res.send('put toDos')
});

router.delete('/api/toDos/:id', function (req, res) {
  res.send('delete toDos')
});

router.get('/', function (req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

module.exports = router