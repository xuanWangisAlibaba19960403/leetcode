/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let left = 0
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }
  return left
};
// @lc code=end

