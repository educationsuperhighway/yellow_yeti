var express = require('express'),
    path = require('path'),
    fs = require('fs');

var router = express.Router();

router.get('/', function(req, res) {
  var filename = 'districts.json',
      filePath = path.resolve(__dirname, "../data", filename),
      stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

module.exports = router;
