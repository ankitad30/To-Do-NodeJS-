var express = require('express');
var app = express();

var PORT = process.env.PORT || 4001 // env variable 


app.get('/', function (req, res) {
resp.send('Todo API Root');


});

app.listen(PORT, function () {
console.log('Express listening on Port' + PORT +'!');


});