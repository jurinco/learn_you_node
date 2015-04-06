var fs = require('fs')

var filename = process.argv[2]

fs.readFile(filename, 'utf8', function (err, text) {
  if (err) throw err;
  var lines = text.split(/\r\n|\r|\n/);
  var newlineCount = lines.length - 1
  console.log(newlineCount)
});
