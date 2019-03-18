const mongoose = require('mongoose');

// Models
const Chat = mongoose.model('Chat');

module.exports = loadUserChats = (req, res) => {
    const errors = {};
    Chat.find({ socketID: { $regex: req.params.userId } }) // chech if the socket id contain the user id
      .sort({ date: -1 })
      .then((chats) => {
        if (chats.length === 0) {
          errors.nochats = 'No Chats found';
          return res.status(404).json(errors);
        }
        return res.json(chats);
      })
      .catch((err) => {
        errors.error = 'Error fetching chats from database';
        res.status(500).json({ ...errors, ...err });
      });
};