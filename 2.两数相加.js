/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let cur = head
  let count = 0
  let carry = 0
  while (l1 || l2) {
    if (l1 && l2) {
      count = l1.val + l2.val + carry
      l2 = l2.next
      l1 = l1.next
    } else if (l1) {
      count = l1.val + carry
      l1 = l1.next
    } else if (l2) {
      count = l2.val + carry
      l2 = l2.next
    }
    carry = count >= 10 ? 1 : 0
    cur.next = new ListNode(count % 10)
    cur = cur.next
  }
  if (carry > 0) {
    cur.next = new ListNode(carry)
  }
  return head.next
};
// @lc code=end

