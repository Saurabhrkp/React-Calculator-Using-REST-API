const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./react-client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'react-client', 'build', 'index.html')
    );
  });
}

module.exports = app;
