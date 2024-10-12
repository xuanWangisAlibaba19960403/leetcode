/* 
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const length = m + n
  const mid = length >> 1
  if (length % 2 === 1) {
    return getKthElement(nums1, nums2, mid + 1);
  }
  return (getKthElement(nums1, nums2, mid) +
    getKthElement(nums1, nums2, mid + 1)) / 2
};

var getKthElement = (nums1, nums2, k) => {
  // 如果有一个数组为空 返回另一个数组的第k-1项
  if (nums1.length === 0) {
    return nums2[k - 1]
  } else if (nums2.length === 0) {
    return nums1[k - 1]
    // k = 1时返回较小的即可
  } else if (k === 1) {
    return Math.min(nums1[0], nums2[0])
  }
  const half = k >> 1
  // Math.min防止越界
  // [0,...,index -1].length为对比的区间数值个数
  const index1 = Math.min(half, nums1.length)
  const poivt1 = nums1[index1 - 1]
  const index2 = Math.min(half, nums2.length)
  const poivt2 = nums2[index2 - 1]
  if (poivt1 <= poivt2) {
    // k - index 即为剩余k
    return getKthElement(nums1.slice(half), nums2, k - index1)
  }
  return getKthElement(nums1, nums2.slice(half), k - index2)
}
// @lc code=end

