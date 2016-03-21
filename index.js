'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const proxy = require('./routes/proxy');
const video = require('./routes/video');
const data = require('./routes/data');

const expressApp = express();
const debug = require('debug')('express-test:server');
const http = require('http');
const port = normalizePort(process.env.PORT || '3000');
var server;

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);

  mainWindow.loadURL('http://127.0.0.1:3000');
  //mainWindow.toggleDevTools();
}

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false
    },
    width: 1200,
    height: 900
  });

  // view engine setup
  expressApp.set('views', path.join(__dirname, 'views'));
  expressApp.set('view engine', 'jade');

  expressApp.use(logger('dev'));
  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({ extended: false }));
  expressApp.use(cookieParser());
  expressApp.use(express.static(path.join(__dirname, 'public')));

  expressApp.use('/', routes);
  expressApp.use('/proxy', proxy);
  expressApp.use('/video', video);
  expressApp.use('/data', data);

  expressApp.set('port', port);

  expressApp.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (expressApp.get('env') === 'development') {
    expressApp.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  expressApp.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  server = http.createServer(expressApp);
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  mainWindow.on('closed', function() {
    mainWindow = null;
    server.close();
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
