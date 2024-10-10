/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return []
  }
  const cache = {}
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    const targetNum = target - curNum
    const targetIndex = cache[targetNum]
    if (targetIndex >= 0) {
      return [i, targetIndex]
    }
    cache[curNum] = i
  }
  return []
};
// @lc code=end

