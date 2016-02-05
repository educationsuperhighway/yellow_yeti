var express = require('express'),
    http = require('http'),
    url = require('url'),
    path = require('path'),
    trumpet = require('trumpet'),
    Throttle = require('throttle');

var router = express.Router();

/* Proxy with throttling */
router.get('/', function(req, res, _next) {
  var proxyRequest = http.get(req.query.url);
  var throttle = new Throttle(50000);

  proxyRequest.on('response', function (proxyResponse) {
    var tr = trumpet();
    tr.selectAll('a', function (a) {
      var href = url.resolve(req.query.url, a.getAttribute('href'));
      var proxyUrl = 'http://localhost:3000/proxy?url=' + href;
      a.setAttribute('href', proxyUrl);
    });

    proxyResponse.pipe(tr).pipe(throttle).pipe(res);
  });

  proxyRequest.on('error', function (err) {
    res.end();
  });

  req.pipe(proxyRequest);
});

module.exports = router;
