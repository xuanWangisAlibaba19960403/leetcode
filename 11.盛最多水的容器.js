/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const length = height.length
  if (length < 2) {
    return 0
  }
  let ans = 0
  let left = 0
  let right = length - 1
  while (left < right) {
    ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]))
    // 最远距离的已经算过
    // 下面要找柱子长的
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return ans
};
// @lc code=end

