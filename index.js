var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/*', function(req, res) {
  var path = req.originalUrl;

  request('https://api.forecast.io/forecast/c922d1154b4c3cb98e5d1e31d3b452c3/' + path).pipe(res);
});

app.listen(process.env.PORT || 3000);
