const {stringLength, reverseString} = require('./task12');

//Task 1
test('returns the length of the string', () => {
  expect(stringLength('Mati')).toBe(4);
});

test('the string is between 1 and 10 chars long', () => {
  expect(stringLength('Mati')).toBe(4);
});

test('the string is not between 1 and 10 chars long', () => {
  expect(stringLength('')).toBe(false);
});

//Task 2
test('the string is being reversed', () => {
  expect(reverseString('Mati')).toBe('itaM');
});