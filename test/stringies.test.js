const { stringies } = require('../lib/stringies.js');

describe('using map and filter to return a string', () => {
  it('takes a function with array param and return string with words that dont contain y', () => {
    const fakeArr = ['yellow', 'pair', 'blue'];
    expect(stringies(fakeArr)).toEqual(['You are so pair', 'You are so blue']);
  });
});
