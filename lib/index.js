
const hrtime = require('browser-process-hrtime')
const normat = require('normat')

module.exports = tmer

function tmer () {
  let start = hrtime()

  return (format = false) => {
    let time = hrtime(start)
    time = parseInt((time[0] * 1000) + (time[1] / 1e6))

    return format ? normat.ms(time) : time
  }
}
