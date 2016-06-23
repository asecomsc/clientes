var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   fs.appendFileSync('json.txt',JSON.stringify(response));
   res.end('listo..');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening http on port 3000", host, port)

})