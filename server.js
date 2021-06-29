// Import dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import routes/helpers/connection
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const helpers = require('./utils/helpers');
const models = require('./models');

// Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up socket.io 
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: { 
    expires: 3600000 // Cookie will expire in 1 hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Sets up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files and uses routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes); 

const users = {}; // Saves all current users 

// Handles server side socket.io on connection
io.on('connection', (socket) => {
  socket.on('new-user', (user) => {
    users[socket.id] = user // Saves the user's socket.id as the key and the user's name as the value
    socket.broadcast.emit('user-connected', user) // Send to the client the user that connected
    socket.emit('current-users', users); // Send object of current users when a user connects
    console.log('A user joined the room.');
  })

  socket.on('msg', (data) => {
    io.sockets.emit('newmsg', data); // Sends to the client side an event called 'newmsg' with the user text
  })

  socket.on('send-current-users', (values) => {
    io.sockets.emit('display-current-users', values) // Sends to the client side current users to append to the screen
  })

  socket.on('disconnect', () => { // When a user disconnects
    console.log('A user left the room.');
    socket.broadcast.emit('user-left', users[socket.id]);
    delete users[socket.id]; // Delete the user that left from the array of objects
    socket.emit('current-users', users); // Send object of current users when a user disconnects
  })
});

// Syncs sequelize
sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () => console.log('Now listening'));
});