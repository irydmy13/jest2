// LeetCode 14

const { longestCommonPrefix } = require('../src/functions');

describe('LeetCode 14: longestCommonPrefix', () => {
  test('example 1', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  });

  test('example 2: no common', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
  });

  test('single string', () => {
    expect(longestCommonPrefix(["alone"])).toBe("alone");
  });

  test('empty array', () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  test('common equals shortest', () => {
    expect(longestCommonPrefix(["interspecies","interstellar","interstate"])).toBe("inters");
  });
});
