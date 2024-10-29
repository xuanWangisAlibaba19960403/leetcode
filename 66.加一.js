/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1
  const m = digits.length
  for (let i = m - 1; i >= 0; i--) {
    // 求和
    const count = carry + digits[i]
    // 去掉可能进位
    digits[i] = count % 10
    carry = count >= 10 ? 1 : 0
  }

  if (carry > 0) {
    digits.unshift(carry)
  }
  return digits
};
// @lc code=end

