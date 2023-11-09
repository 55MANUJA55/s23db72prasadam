var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BadmintonRouter = require('./routes/Badminton');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourseRouter = require('./routes/resourse');

const Badminton = require('./models/Badminton');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//mongo connection
mongoose.connect(connectionString);
var db = mongoose.connection;+
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connection to DB succeeded');


async function recreateDB(){

 await Badminton.deleteMany();
 
 let instance1 = new Badminton({Player_Name:"Nandu Natekar",Player_Age :88,No_Of_Matches_Played:32});
 let instance2 = new Badminton({Player_Name:"Pullela Gopichand",Player_Age :49,No_Of_Matches_Played:8});
 let instance3 = new Badminton({Player_Name:"Prakash Padukone",Player_Age :68,No_Of_Matches_Played:25});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
 instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
    });

}

let reseed = true;
if (reseed) {recreateDB();}
  
});



//mongo connection

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/resourse', resourseRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Badminton', BadmintonRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
