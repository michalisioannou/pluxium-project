var express = require('express');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var clientsRouter = require('./routes/clients');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/clients', clientsRouter);

module.exports = app;