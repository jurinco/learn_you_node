console.log(
  process.argv.slice(2).reduce( function(acc, x) {
    return acc + Number(x)
  }, 0)
)
