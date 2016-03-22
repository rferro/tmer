
import normat from 'normat';

module.exports = () => {
  let start = process.hrtime();

  return (format = false) => {
    let time = process.hrtime(start);
    time = parseInt((time[0] * 1000) + (time[1] / 1e6));

    return format ? normat.ms(time) : time;
  };
};
