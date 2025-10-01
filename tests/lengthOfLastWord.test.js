// LeetCode 58

const { lengthOfLastWord } = require('../src/functions');

describe('LeetCode 58: lengthOfLastWord', () => {
  test('simple', () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  test('trailing spaces', () => {
    expect(lengthOfLastWord("a ")).toBe(1);
  });

  test('multiple spaces inside', () => {
    expect(lengthOfLastWord("  fly   me   to   the moon  ")).toBe(4);
  });

  test('empty', () => {
    expect(lengthOfLastWord("")).toBe(0);
  });
});
