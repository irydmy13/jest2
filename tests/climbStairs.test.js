// LeetCode 70

const { climbStairs } = require('../src/functions');

describe('LeetCode 70: climbStairs', () => {
  test('n=1..6', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(6)).toBe(13);
  });

  test('edge: n<=0', () => {
    expect(climbStairs(0)).toBe(0);
  });
});
