/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!Array.isArray(strs) || strs.length === 0) {
    return ''
  }
  let prefix = strs[0];
  const count = strs.length;
  for (let i = 1; i < count; i++) {
    prefix = getLongestCommonPrefix(prefix, strs[i]);
    if (prefix.length == 0) {
      return '';
    }
  }
  return prefix;

};

const getLongestCommonPrefix = (prefix, str) => {
  let result = ''
  let i = 0
  const left = prefix.length
  let j = 0
  const right = str.length
  while(i < left && j < right) {
    if (prefix[i] !== str[j]) {
      break
    }
    result += prefix[i]
    i++
    j++
  }
  return result
}
// @lc code=end

