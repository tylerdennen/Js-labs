'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Lacy Brown': '+380445734413',
  'Donald Trump': '+380123469671'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
