const isPrime = require('./../../isPrime');

test('Is it prime ?', () => {
  expect(isPrime(2)).toBe('2 IS A PRIME')
  expect(isPrime(389)).toBe('389 IS A PRIME')
  expect(isPrime(973)).toBe('973 IS NOT A PRIME')
  expect(isPrime(283)).toBe('283 IS A PRIME')
  expect(isPrime(21)).toBe('21 IS NOT A PRIME')
})