/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let str = ''
  while (num > 0) {
    num = num % 10
    translateRoman(num)
  }
  // const map = {
  //   I: 1,
  //   V: 5,
  //   X: 10,
  //   L: 50,
  //   C: 100,
  //   D: 500,
  //   M: 1000,
  // }

};


const translateRoman = (num) => {

}
// @lc code=end

