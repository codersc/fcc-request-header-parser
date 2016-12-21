var port = 8080;
var express = require('express');
var app = express()

app.get('/', function (req, res) {
  var ip = req.ip;
  var os = process.platform;
  var lang = req.headers["accept-language"].split(',')[0];
  res.json({
    "ipAddress": ip,
    "language": lang,
    "operatingSystem": os
  });
})

app.listen(port, function () {
  console.log('App listening on port ' + port)
})