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
const convert = (s, numRows) => {
  if (typeof s !== 'string' || typeof numRows !== 'number') {
    return s
  }
  const n = s.length, r = numRows;
  if (r < 2 || r >= n) {
    return s
  }
  const dp = new Array(r).fill(0).map(() => [])
  const t = r * 2 - 2
  let x = 0
  for (let i = 0; i < n; i++) {
    dp[x].push(s[i])
    // i % t 在每一轮的位置
    if (i % t < r - 1) {
      x++
    } else {
      x--
    }
  }
  return dp.map((strList) => {
    return strList.join('')
  }).join('')
}

// @lc code=end

