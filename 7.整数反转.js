/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN_NUM = Math.pow(-2, 31)
  const MAX_NUM = Math.pow(2, 31) - 1
  let res = 0
  while (x) {
    // 取最后一位
    res = res * 10 + x % 10
    if (res <= MIN_NUM || res >= MAX_NUM) {
      return 0
    }
    x = ~~(x / 10)
  }
  return res
};
// @lc code=end

