// Imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var cors = require('cors');

// Init
var app = express();

app.use(helmet());
app.use(cors());

// Config
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Controllers
var index = require('./src/rest/index');
var user = require('./src/rest/user');
 var sosuri = require('./src/rest/sosuri');
 var bauturi = require('./src/rest/bauturi');
 var deserturi = require('./src/rest/deserturi');
 var sandwich = require('./src/rest/sandwich');
 var comentariu = require('./src/rest/comentariu');
 var salate = require('./src/rest/salate');
 var pizza = require('./src/rest/pizza');


app.use('/api', index);
app.use('/api/user', user);
app.use('/api/sosuri', sosuri);
app.use('/api/bauturi', bauturi);
app.use('/api/deserturi', deserturi);
app.use('/api/sandwich', sandwich);
app.use('/api/comentariu', comentariu);
app.use('/api/salate', salate);
app.use('/api/pizza', pizza);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.jsonp(err.status || 500);
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!');
});

module.exports = app;
