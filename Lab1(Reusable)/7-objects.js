'use strict';

const fn = () => {
  const a = { name: 'Marcus' };
  let b = { name: 'Bob' };
  a.name = 'Lucy';
  b.name = 'Mary';
  // a = 7;
  b = 4;
//if an object is assigned to a constant, then the constant itself
// is protected from changes, but not the properties inside it
};

module.exports = { fn };
