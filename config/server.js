
//inicializando servidor
var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(express.static('public'));

module.exports = app;