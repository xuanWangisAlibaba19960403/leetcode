/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode()
  let cur = head
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = new ListNode(list1.val)
      cur = cur.next
      list1 = list1.next
    } else {
      cur.next = new ListNode(list2.val)
      cur = cur.next
      list2 = list2.next
    }
  }
  while (list1) {
    cur.next = new ListNode(list1.val)
    cur = cur.next
    list1 = list1.next
  }
  while (list2) {
    cur.next = new ListNode(list2.val)
    cur = cur.next
    list2 = list2.next
  }
  return head.next
};
// @lc code=end

