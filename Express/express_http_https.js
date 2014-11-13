var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
var url = require('url');

/*var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
  };*/
  
http.createServer(app).listen(80);
//https.createServer(options, app).listen(443);

app.get('/', function(req, res){
	res.send('Hello from Express');
});

app.get('/query', function(req, res){
	var id = req.query.id;
	var score = req.query.score;
	console.log(JSON.stringify(req.query));
	res.send('done');
});

app.get('/login', function(req, res){
	res.send('login');
});

app.get('/find', function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	res.send('query:' + query.first + ':' + query.last);
});

app.post('/save', function(req, res){
	res.send('save');
});

//app.all('*', function(req, res){
//	res.send('log this page');
//});

app.get('/user/:userid', function(req, res){
	res.send('get user' + req.param('userid'));
});
app.param('userid', function(req, res, next, value){
	console.log('userid:' + value);
	next()
});

