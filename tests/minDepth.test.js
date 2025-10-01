// LeetCode 111

const { minDepth, TreeNode } = require('../src/functions');

function treeFromArray(arr) {

  if (!arr.length || arr[0] == null) return null;
  const root = new TreeNode(arr[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift();
    if (i < arr.length) {
      const leftVal = arr[i++];
      if (leftVal != null) {
        node.left = new TreeNode(leftVal);
        q.push(node.left);
      }
    }
    if (i < arr.length) {
      const rightVal = arr[i++];
      if (rightVal != null) {
        node.right = new TreeNode(rightVal);
        q.push(node.right);
      }
    }
  }
  return root;
}

describe('LeetCode 111: minDepth', () => {
  test('example-like', () => {
    
    const root = treeFromArray([3,9,20,null,null,15,7]);
    expect(minDepth(root)).toBe(2);
  });

  test('single node', () => {
    const root = new TreeNode(1);
    expect(minDepth(root)).toBe(1);
  });

  test('skewed', () => {
    const root = treeFromArray([1,2,null,3,null,4]);
    expect(minDepth(root)).toBe(4);
  });

  test('empty', () => {
    expect(minDepth(null)).toBe(0);
  });
});
