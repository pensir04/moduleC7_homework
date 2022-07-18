const reverse = require('./index');

test('should get reverse string', () => {
  expect(reverse('hellow')).toBe('wolleh');
});
