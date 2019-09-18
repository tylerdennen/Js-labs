'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  for (let i = start; i < end + 1; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};

module.exports = { rangeOdd };
