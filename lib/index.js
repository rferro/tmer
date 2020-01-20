const hrtime = require("browser-process-hrtime");
const { ms } = require("normat");

const hrtimeDiff = function(start) {
  start = hrtime(start);
  return parseInt(start[0] * 1000 + start[1] / 1e6);
};

const tmer = function(formatByDefault = false, formatter = ms) {
  const start = hrtime();

  return (format = formatByDefault) => {
    const time = hrtimeDiff(start);
    return format ? formatter(time) : time;
  };
};

module.exports = tmer;
