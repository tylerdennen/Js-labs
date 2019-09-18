'use strict';

const phonebook = [{
  name: 'Marcus Aurelius',
  phone: '+380445554433'
}, {
  name: 'Lacy Brown',
  phone: '+380445734413'
}, {
  name: 'Donald Trump',
  phone: '+380123469671'
}];

const findPhoneByName = name => {
  for (const persn of phonebook) {
    if (persn.name === name) return persn.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
