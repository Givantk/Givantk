const mongoose = require('mongoose');

const Chat = mongoose.model('Chat');

module.exports = loadPrivateChat = (req, res) => {
    const errors = {};
    Chat.find({ socketID: req.params.socketId }) // find a specific chat
      .sort({ date: -1 })
      .then((chats) => {
        if (chats.length === 0) {
          errors.nochats = 'No Chat found';
          return res.status(404).json(errors);
        }
        return res.json(chats);
      })
      .catch((err) => {
        errors.error = 'Error fetching chat from database';
        res.status(500).json({ ...errors, ...err });
      });
};