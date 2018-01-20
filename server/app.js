var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
Project = require('./api/models/projectModel'),

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://pi2:csstv2018@ds159187.mlab.com:59187/projectdb');
//mongoose.connect('mongodb://localhost:27017/Tododb');

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//var routes = require('./api/routes/todoListRoutes'); //importing route
var routes = require('./api/routes/projectRoutes');
routes(app); //register the route
//projectRoutes(app);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
