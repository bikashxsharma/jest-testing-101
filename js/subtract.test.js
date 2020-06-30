const subtract = require('./subtract')

test('Subtract two numbers', () => {
  expect(subtract(10, 4)).toBe(6)
})