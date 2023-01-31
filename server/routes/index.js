const express = require('express');
// const router = require('express').Router();
const allWeed = require('./allWeed')
const { clog } = require('../middleware/clog');

const app = express();
app.use('/api', allWeed);

app.use(clog);

module.exports = app