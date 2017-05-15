var http = require('http');
/* we always require http to access the node http module*/
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

var lyrics = require('./fax');

app.get('/api/lyrics', function (req, res) {
res.send(lyrics.lyrics);
});
app.get('/api/random', function (req, res) {
var i = Math.floor(Math.random() * lyrics.lyrics.length);
res.send(lyrics.lyrics[i]);
});

app.listen(5000);


/*how to write the server using a named function*/
//http.createServer(startServer).listen(8080);
//
//function startServer(request,response){
//    response.writeHead(200, {"Content-type" : "text/plain"});
//    response.write('hi');
//    response.end();
//




