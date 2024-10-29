/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return nums
  }
  const n = nums.length
  let slow = 1
  let fast = 1
  while (fast < n) {
    // fast - 1 理解成slow
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end

