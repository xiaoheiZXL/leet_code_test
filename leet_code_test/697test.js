/**
 *
 * Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

 Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 Example 1:

 Input: nums = [1,2,2,3,1]
 Output: 2
 Explanation:
 The input array has a degree of 2 because both elements 1 and 2 appear twice.
 Of the subarrays that have the same degree:
 [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 The shortest length is 2. So return 2.
 Example 2:

 Input: nums = [1,2,2,3,1,4,2]
 Output: 6
 Explanation:
 The degree is 3 because the element 2 is repeated 3 times.
 So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

 Constraints:

 nums.length will be between 1 and 50,000.
 nums[i] will be an integer between 0 and 49,999.

 697. 数组的度
 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 示例 1：

 输入：[1, 2, 2, 3, 1]
 输出：2
 解释：
 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 连续子数组里面拥有相同度的有如下所示:
 [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 最短连续子数组[2, 2]的长度为2，所以返回2.

 示例 2：

 输入：[1,2,2,3,1,4,2]
 输出：6

 提示：

 nums.length 在1到 50,000 区间范围内。
 nums[i] 是一个在 0 到 49,999 范围内的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1： 使用哈希表，记录每次元素出现的个数，第一次出现的索引，最后一次出现的索引，因为要取和这个度一样的最小子数组的长度，
// 所以最小子数组的两端一定是当前频度最高的值，所以用最后一次出现索引 - 第一次出现索引 即为当前最小子数组的长度:
var findShortestSubArray = function (nums) {
  const map = {}
  for (const i in nums) {
    const item = nums[i]
    if (map[item]) {
      map[item][0]++
      map[item][2] = i
    } else {
      map[item] = [1, i, i]
    }
  }
  let maxLength = 0; let minLength = -1
  for (const [k, v] of Object.entries(map)) {
    if (v[0] > maxLength) {
      maxLength = v[0]
      minLength = map[k][2] - map[k][1] + 1
    } else if (v[0] === maxLength) {
      const targetLength = map[k][2] - map[k][1] + 1
      if (targetLength < minLength) {
        minLength = targetLength
      }
    }
  }
  return minLength
}

console.log(findShortestSubArray([1, 2, 2, 3, 1, 3, 2]))
console.log(findShortestSubArray([1, 2, 2, 3, 1]))
