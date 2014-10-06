var http = require('http');
var	express = require('express');

var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/js'));

app.get('/', function(req, res) {
	 res.render(__dirname + 'index.html')
})

http.createServer(app).listen(8080);
console.log('Localhost:8080')