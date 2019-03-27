var express = require('express');
var router = express.Router();
const db = require('./connection')
const api = require('./routes/api')
const view = require('./routes/view')

console.log(db,"db");