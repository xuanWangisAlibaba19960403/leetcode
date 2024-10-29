/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let m = s.length
  let i = m - 1
  while (s[i] === ' ') {
    i--
  }
  let j = 0
  for (; i >= 0; i--) {
    if (s[i] === ' ') {
      break
    }
    j++
  }
  return j
};
// @lc code=end

