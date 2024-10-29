/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const length = s.length
  if (length % 2 !== 0) {
    return false
  }
  let i = 0;
  const stack = []
  const validSymbol = ['(', '[', '{']
  while (i < length) {
    if (validSymbol.includes(s[i])) {
      stack.push(s[i])
    } else if (s[i] === ')') {
      if (stack.pop() !== '(') {
        return false
      }
    } else if (s[i] === ']') {
      if (stack.pop() !== '[') {
        return false
      }
    } else if (s[i] === '}') {
      if (stack.pop() !== '{') {
        return false
      }
    }
    i++
  }
  return stack.length === 0
};
// @lc code=end

