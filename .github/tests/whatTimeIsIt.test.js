const whatTimeIsIt = require('./../../whatTimeIsIt');

test('what time is it?', () => {
  expect(whatTimeIsIt("12:00 pm")).toBe("It's noon");
  expect(whatTimeIsIt("3:49 pm")).toBe("It's three past forty nine in the afternoon");
  expect(whatTimeIsIt('12:00 am')).toBe("It's midnight");
  expect(whatTimeIsIt("5:31 am")).toBe("It's five past thirty one in the morning");
  expect(whatTimeIsIt("9:11 am")).toBe("It's nine past eleven in the morning");
})
