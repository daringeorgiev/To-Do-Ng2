const Todo = require('./model');

module.exports = {
  getAllTodos: function (req, res) {
    Todo
      .find({}, function (err, todos) {
        if (err) {
          throw err;
        }
        res.json(todos);
      });
  },

  getTodoById: function (req, res) {
    Todo
      .findOne({
        _id: req.params.id
      }, function (err, todo) {
        if (err) {
          res
            .status(404)
            .json(err.message);
        }
        res.json(todo);
      });
  },

  createTodo: function (req, res) {
    Todo
      .create({
        title: req.body.title,
        description: res.req.description || '',
        ownerId: req.body.ownerId || '',
        complete: req.body.complete || false
      }, function (err, todo) {
        if (err) {
          res.send(err);
          throw err;
        }
        res.send(todo);
      });

  },

  updateTodo: function (req, res) {
    Todo
      .findById(req.params.id, function (err, todo) {
        if (err) {
          throw err;
        }

        todo.title = req.body.title;
        todo.description = req.body.description || '';
        todo.ownerId = req.body.ownerId || '';
        todo.complete = req.body.complete || false;

        todo.save(function (err, todo) {
          if (err) {
            res.send(err);
          }
          res.json(todo);
        });
      });
  },

  deleteTodo: function (req, res) {
    Todo
      .findOne({
        _id: req.params.id
      }, function (err, todo) {
        if (err) {
          res
            .status(404)
            .json(err.message);
        }

        Todo
          .remove({
            _id: req.params.id
          }, function (err, todo) {
            if (err) {
              res.send(err);
              throw err;
            }
            Todo
              .find({}, function (err, todos) {
                if (err) {
                  throw err;
                }
                res.json(todos);
              });
          });

      });

  }
}