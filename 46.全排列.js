/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, path = [], result = []) {
    if (nums.length === 0) {
        result.push(path)
        return result
    }
    nums.forEach((val, idx) => {
        permute(nums.toSpliced(idx, 1), path.concat(val), result)
    })
    return result
};
// @lc code=end

