const copyArray = require('./copyArray')
test('Copy/clone array', () => {
  expect(copyArray(["bikash", 1, "sharma"])).toStrictEqual(['bikash', 1, 'sharma'])
  expect(copyArray(["bikash", 1, "sharma"])).not.toBe(['bikash', 1, 'sharma'])
})
