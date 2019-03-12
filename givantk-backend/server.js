const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
//const socket = require('socket.io');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Passport Config
app.use(passport.initialize());
require('./config/passport')(passport);

// Cross Origin Problem
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  next();
});

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/service', require('./routes/service'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/points', require('./routes/points'));
app.use('/assets/images', express.static('assets/images'));

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

const io = require('socket.io').listen(server);
//const ChatController = require('../controllers/chatController/index');
const Chat = require('./models/Chat');
io.use((socket, next) => {
  // accept the user data given from this.socket = io('http://192.168.1.8:5000', {query: users_data}); in front-end
  socket.id = socket.handshake.query.id1 + '+' + socket.handshake.query.id2; // socket.id is the combination of the 2 ids
  // check first if the socket exists but reversed
  let socketIDReversed =
    socket.handshake.query.id2 + '+' + socket.handshake.query.id1;

  Chat.countDocuments({ socketID: socketIDReversed }, (err, count) => {
    if (count == 0) {
      // no socket found
      console.log('socket not found, creating new socket...');
      socketIO(socket.id);
    } else {
      // socket found
      socket.id = socketIDReversed;
      console.log('socket changed to: ' + socket.id);
      socketIO(socket.id);
    }
  });

  function socketIO(FinalSocketID) {
    console.log(
      'A connection is established and socket id is ' + FinalSocketID
    );
    console.log(
      socket.handshake.query.name1 +
        ' and ' +
        socket.handshake.query.name2 +
        ' entered the chat.'
    );

    let socketID = FinalSocketID;
    let title = socket.handshake.query.name1 + ' & ' + socket.handshake.query.name2;
    console.log('title: '+ title);
    let message = {
      userid: '',
      username: '',
      content: ''
    };
    let chat = new Chat({
      socketID: socketID,
      title: title,
      $push: { message: message }
    });
    chat.save((error) => {
      // check if there is a chat history in our DB or not
      if (error) {
        console.log('Chat History Already Exists'); // so we must load the chat history from DB
        Chat.find({ socketID: socketID }, (err, docs) => {
          if (err) console.log('no messages found.');
          else {
            //console.log(docs[0].message); // view all chat history in console
            io.emit('history', docs[0].message); // send chat history to front-end
          }
        });
      } else console.log('Chat History Created.');
    });

    // accept the msg entered in the TextInput field from the first user then send it to the other user
    socket.on('chat message', (msg, userid, username) => {
      console.log(username + ': ' + msg);
      Chat.updateOne(
        { socketID: socketID },
        {
          $push: {
            // add the new msg to DB
            message: {
              userid: userid,
              username: username,
              content: msg
            }
          }
        },
        (error) => {
          if (error) console.log(error);
          else console.log('Message Stored');
        }
      );

      io.emit('chat message', msg); // after storing the msg we send it back to the other user
    });

    next();
  }
});

// To push to heroku, we just do 'git push heroku master' from the backend
