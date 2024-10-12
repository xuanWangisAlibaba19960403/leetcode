/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const dp = []
  let length = s.length
  const col = s.length / (numRows * 2 - 2) * 2
  let start = 0
  while (start < length) {
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < numRows; j++) {
        dp[j] = dp[j] || []
        if (isFill(i, j, numRows)) {
          dp[j][i] = s[start++]
        }
      }
    }
  }
  return dp.map((arr) => {
    return arr.reduce((str, char) => {
      if (char) {
        str += char
      }
      return str
    }, '')
  }).join('')
};

const isFill = (i, j, row) => {
  // 对角线
  if ((i + j) % (row - 1) === 0) {
    return true
  }
  // 竖线
  if (i % (row - 1) === 0) {
    return true
  }
  return false
}

convert('PAYPALISHIRING', 3)
// @lc code=end

