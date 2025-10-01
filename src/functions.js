function sum(a, b) {
  return a + b;
}

function isPalindrome(str) {
  const normalized = String(str).toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

function isStrongPassword(password) {
  const s = String(password);
  const hasLetter = /[A-Za-z]/.test(s);
  const hasNumber = /[0-9]/.test(s);
  const hasSpecialChar = /[!@#$]/.test(s);
  return s.length >= 16 && hasLetter && hasNumber && hasSpecialChar;
}

function wordsCount(str) {
  const tokens = String(str).trim().split(/\s+/).filter(Boolean);
  return tokens[0] === undefined ? 0 : tokens.length;
}

// 14. Longest Common Prefix
function longestCommonPrefix(strs) {
  if (!Array.isArray(strs) || strs.length === 0) return "";
  let prefix = strs[0] ?? "";
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

// 58. Length of Last Word
function lengthOfLastWord(s) {
  if (typeof s !== 'string') return 0;
  const tokens = s.trim().split(/\s+/);
  return tokens.length ? tokens[tokens.length - 1].length : 0;
}

// 70. Climbing Stairs
function climbStairs(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b; b = c;
  }
  return n === 1 ? a : b;
}

// для задач 83 и 111
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 83. Remove Duplicates from Sorted List
function deleteDuplicates(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

// 111. Minimum Depth of Binary Tree
function minDepth(root) {
  if (!root) return 0;
  const q = [{ node: root, depth: 1 }];
  while (q.length) {
    const { node, depth } = q.shift();
    if (!node.left && !node.right) return depth;
    if (node.left) q.push({ node: node.left, depth: depth + 1 });
    if (node.right) q.push({ node: node.right, depth: depth + 1 });
  }
  return 0;
}


module.exports = { sum, isPalindrome, isStrongPassword, wordsCount, 
// 14, 58, 70, 83, 111 задачи
longestCommonPrefix, lengthOfLastWord, climbStairs, deleteDuplicates, minDepth,
// структуры данных для тестов
  ListNode, TreeNode,};