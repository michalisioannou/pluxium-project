var express = require('express');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var accountsmt5Router = require('./routes/accountsmt5');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/accountsmt5', accountsmt5Router);

module.exports = app;
