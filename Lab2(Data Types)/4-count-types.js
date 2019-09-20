'use strict';

const countTypesInArray = array => {
  const result = {};
  for (const obj of array) {
    result[typeof obj] = (result[typeof obj] ? result[typeof obj] + 1 : 1);
  }
  return result;
};

module.exports = { countTypesInArray };
