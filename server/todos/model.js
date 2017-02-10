const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  ownerId: String,
  complete: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);