/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const length = nums.length
  if (length < 3) {
    return []
  }
  const ret = []
  const cache = {}
  nums.sort((a, b) => a - b)
  for (let x = 0; x < length - 2; x++) {
    for (let y = x + 1; y < length - 1; y++) {
      let z = y + 1
      if (nums[x] + nums[y] + nums[z] === 0) {
        const key = [nums[x], nums[y], nums[z]].join('-')
        console.log(key)
        if (!cache[key]) {
          cache[key] = true
          ret.push([nums[x], nums[y], nums[z]])
        }
      }
      console.log(x, y, z)
    }
  }
  return ret
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// @lc code=end

