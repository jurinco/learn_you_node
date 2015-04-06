var fs = require('fs')

var filename = process.argv[2]

// Get number of newlines "\n"
var text = fs.readFileSync(filename, 'utf8')
var lines = text.split(/\r\n|\r|\n/);
var newlineCount = lines.length - 1

console.log(newlineCount)
