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
    expires: 600000 // Cookie will expire in 10 minutes
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Initialize handlebars helpers
const hbs = exphbs.create({ helpers });

// Sets up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files and uses routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes); 

let users = 0; // Keeps track of number of users
io.on('connection', (socket) => {
  console.log('A user joined the room.');
  users++;
  console.log(users);

  socket.on('disconnect', () => {
    console.log('A user left the room.');
    users--;
    console.log(users);
  })

socket.on('msg', (data) => {
  io.sockets.emit('newmsg', data); // Sends to the client side an event called 'newMsgHandler' with the user text
})
});

// Syncs sequelize
sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () => console.log('Now listening'));
});