var express = require('express'),
    http = require('http'),
    url = require('url'),
    path = require('path'),
    Throttle = require('throttle');

var router = express.Router();

/* Proxy with throttling */
router.get('/', function(req, res, _next) {
  var proxyRequest = http.get(req.query.url);
  var throttle = new Throttle(50000);

  proxyRequest.on('response', function (proxyResponse) {
    res.setHeader('x-throttle-proxy', 'skipped');
    res.setHeader('via', 'throttle-proxy');
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    proxyResponse.pipe(throttle).pipe(res);
  });

  proxyRequest.on('error', function (err) {
    res.end();
  });

  req.pipe(proxyRequest);
});

module.exports = router;
