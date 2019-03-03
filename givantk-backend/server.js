const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const socket = require('socket.io');

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
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/service', require('./routes/service'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/payment',require('./routes/payment'))
app.use('/assets/images',express.static('assets/images'));

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

// socket.io setup
const io = socket(server);
io.on('connection', function(socket) {
  // waiting for connection with a client
  console.log('socket connection made and the socket id is ' + socket.id);

  socket.on('chat', function(data) {
    // waiting for a data to be send from a client
    io.sockets.emit('chat', data); // send the message back from the server to the rest of the clients
  });
});

// To push to heroku, we just do 'git push heroku master' from the backend
