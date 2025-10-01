const { sum, isPalindrome, isStrongPassword, wordsCount } = require('../src/functions');

describe("sum function", () => {
  test("sum two numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("work with null-like", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("check if a string is palindrome", () => {
  const strArray = ['anna', 'civic', 'kayak', 'level', 'madam', 'mom', 'radar'];
  strArray.forEach(elem => {
    test(`${elem} is a palindrome`, () => {
      expect(isPalindrome(elem)).toBe(true);
    });
  });

  test("non-palindrome example", () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});

describe("is strong password", () => {
  const passArray = [
    'Abcd1234!@#$QWER',
    'Qwerty1234#Qwerty'
  ];
  passArray.forEach(element => {
    test(`${element} is a strong password`, () => {
      expect(isStrongPassword(element)).toBe(true);
    });
  });
});

describe("is weak password", () => {
  const passArray = [
    'Maria',
    'Qwerty12',
    'abcdefghijklmnop',
    'Abcd1234Abcd1234'
  ];
  passArray.forEach(element => {
    test(`${element} is a weak password`, () => {
      expect(isStrongPassword(element)).toBe(false);
    });
  });
});

describe("count words in a string", () => {
  const strArray = [
    ["Hello world, this is a test string.", 7],
    ["One two three", 3],
    ["Leading   and    trailing   spaces   ", 4],
    ["", 0],
    ["   ", 0]
  ];
  strArray.forEach(elem => {
    test(`"${elem[0]}" has ${elem[1]} words`, () => {
      expect(wordsCount(elem[0])).toBe(elem[1]);
    });
  });
});
