/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (typeof s !== 'string') {
    return ''
  }
  const length = s.length
  if (length < 2) {
    return s
  }
  let res = ''
  let dp = []
  for (let i = 0; i < length; i++) {
    dp[i] = []
    dp[i][i] = true
    for (let j = i; j >= 0; j--) {
      // 字串dp[j + 1][i - 1]
      dp[j][i] = s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.slice(j, i + 1)
      }
    }
  }
  return res
};
// @lc code=end

