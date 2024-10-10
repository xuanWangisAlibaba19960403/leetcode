/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let distance = 0
  const cache = new Set()
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    while (cache.has(char)) {
      // 重复的时候 删掉[left, right -1]所有字符
      cache.delete(s[left++])
    }
    cache.add(char)
    distance = Math.max(distance, right - left + 1)
  }
  return distance
};
// @lc code=end

