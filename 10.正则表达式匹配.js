/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dp = new Array(m).fill(0).map(() => new Array(n))
  // i、j都为字符串空则匹配
  dp[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <=n; j++ ) {

    }
  }
};

const matches = (s, p, i, j) => {
  if (s[i] === p[j] || p[j] === '.') {
    return true
  }
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
// @lc code=end

