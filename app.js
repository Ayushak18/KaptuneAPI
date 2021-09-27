let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let cors = require('cors');

mongoose.connect('mongodb://localhost/Employees', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to Database');
  }
});

let employeesRouter = require('./routes/employees.js');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/employees', employeesRouter);

module.exports = app;
