const { expect } = require('@jest/globals');
const {stringLength, reverseString} = require('./app');

test('Takes the string "Olawale" and returns 7', () => {
  expect(stringLength('Olawale')).toBe(7);
})

test('Takes a string longer than 10 or shorter than 1 and throws error', () => {
  expect(() => stringLength('Olawaleola')).toThrow();
})

test('Takes a string "Olawale" and returns the reversed string "elawalO"', () => {
  expect(reverseString('Olawale')).toBe('elawalO');
})