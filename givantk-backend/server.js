const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');

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

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/service', require('./routes/service'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
