const hrtime = require('browser-process-hrtime')
const { ms } = require('normat')

module.exports = function tmer () {
  const start = hrtime()

  return (format = false) => {
    let time = hrtimeDiff(start)
    return format ? ms(time) : time
  }
}

function hrtimeDiff (start) {
  start = hrtime(start)
  return parseInt(start[0] * 1000 + start[1] / 1e6)
}
