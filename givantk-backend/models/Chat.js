const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  socketID: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  message: [{
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    username: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    } 
  }]
});

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;
