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
  for (let i = length - 1; i >= 0; i--) {
    dp[i] = []
    dp[i][i] = true
    for (let j = i; j < length; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }

  return res
};
// @lc code=end

