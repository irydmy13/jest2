// LeetCode 83

const { deleteDuplicates, ListNode } = require('../src/functions');

function listFromArray(arr) {
  let dummy = new ListNode(-1), cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}
function arrayFromList(head) {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
}

describe('LeetCode 83: deleteDuplicates', () => {
  test('example', () => {
    const head = listFromArray([1,1,2,3,3]);
    const res = deleteDuplicates(head);
    expect(arrayFromList(res)).toEqual([1,2,3]);
  });

  test('all unique', () => {
    const head = listFromArray([1,2,3]);
    expect(arrayFromList(deleteDuplicates(head))).toEqual([1,2,3]);
  });

  test('all same', () => {
    const head = listFromArray([5,5,5,5]);
    expect(arrayFromList(deleteDuplicates(head))).toEqual([5]);
  });

  test('empty', () => {
    expect(arrayFromList(deleteDuplicates(null))).toEqual([]);
  });
});
