var filesWithExtension = require('./files_with_extension')

var dir = process.argv[2]
var ext = process.argv[3]

filesWithExtension(dir, ext, function (err, filenames) {
  if (err) throw err;

  filenames.forEach( function (filename) {
    console.log(filename)
  })
})
