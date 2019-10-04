const hrtime = require('browser-process-hrtime')
const { ms } = require('normat')

module.exports = function tmer (formatByDefault = false, formatter = ms) {
  const start = hrtime()

  return (format = formatByDefault) => {
    let time = hrtimeDiff(start)
    return format ? formatter(time) : time
  }
}

function hrtimeDiff (start) {
  start = hrtime(start)
  return parseInt(start[0] * 1000 + start[1] / 1e6)
}
