var fs = require("fs"),
    express = require('express'),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    Throttle = require('throttle');

var router = express.Router();

router.get('/', function(req, res) {
  var filename = 'Holy_meatballs-LearningScienceInAVirtualWorld210.mov',
      file = path.resolve(__dirname, "../public/videos/", filename),
      range = req.headers.range,
      positions = range.replace(/bytes=/, "").split("-"),
      start = parseInt(positions[0], 10),
      throttle = new Throttle(100000);

  fs.stat(file, function(err, stats) {
    var total = stats.size;
    var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    var chunksize = (end - start) + 1;

    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4"
    });

    var stream = fs.createReadStream(file, { start: start, end: end })
      .on("open", function() {
        stream.pipe(throttle).pipe(res);
        //stream.pipe(res);
      }).on("error", function(err) {
        res.end(err);
      });

    stream.on('data', function(buffer) {
      console.log("" + (new Date().toISOString()) + " - " + buffer.length + ' bytes sent');
    });
  });
});

module.exports = router;
