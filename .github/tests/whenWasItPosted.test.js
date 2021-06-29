const whenWasItPosted = require('./../../whenWasItPosted')

test('whenWasItPosted?', () => {
  
  // do not change this code below
  const changeToString = __ => {
    const _ = new Date(__)
    const month = _.toLocaleString('default', { month: 'long' });
    const date = _.getDate()
    const year = _.getFullYear()
    return `${date} ${month} ${year}`
  }
  
    const date = new Date();
    const date1 = new Date();
    const date2 = new Date();
    const date3 = new Date();
    const date4 = new Date();
    expect(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11)))).toBe('11 months ago');
    expect(whenWasItPosted(changeToString(date1.setDate(date1.getDate() - 14)))).toBe('2 weeks ago');
    expect(whenWasItPosted(changeToString(date2.setDate(date2.getDate() - 3)))).toBe('3 days ago');
    expect(whenWasItPosted(changeToString(date3.setFullYear(date3.getFullYear() - 1)))).toBe('1 year ago');
    expect(whenWasItPosted(changeToString(date4.setFullYear(date4.getFullYear() - 20)))).toBe('20 years ago');
})


