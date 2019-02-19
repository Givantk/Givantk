const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  userID1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  msg1: {
    type: String,
    required: true
  },

  userID2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  msg2: {
    type: String,
    required: true
  }
});

const Chat = mongoose.Model('Chat', ChatSchema);
module.exports = Chat;
