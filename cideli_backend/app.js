const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const debug = require('debug');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const config = require(path.join(__dirname, 'config/config.json'))['development'];

const viewPath = config.path;
const app = express();


app.use('/', express.static(path.join(__dirname, viewPath.index)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'cideli_secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(cors());


app.use('/', require('./routes'));

app.set('port', config.port);
const server = http.createServer(app);
server.listen(config.port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}


// development error handler
// will print stacktrace
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log(err);
  res.json({
    message: err.message,
    error: err,
  });
  next();
});
/**
 * Listen on provided port, on all network interfaces.
 */

server.on('error', onError);
server.on('listening', onListening);