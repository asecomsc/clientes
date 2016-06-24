var express = require('express');
var app = express();
var fs = require('fs');
var querystring = require("querystring");

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {
   var qs = querystring.parse(req.url.split("?")[1]);
   var miRes = JSON.stringify(qs);
   fs.appendFileSync('json.txt',miRes);
   res.end(miRes);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening http on port 3000", host, port)

})