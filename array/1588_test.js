/**
 1588. 所有奇数长度子数组的和
 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

 子数组 定义为原数组中的一个连续子序列。

 请你返回 arr 中 所有奇数长度子数组的和 。

 示例 1：

 输入：arr = [1,4,2,5,3]
 输出：58
 解释：所有奇数长度子数组和它们的和为：
 [1] = 1
 [4] = 4
 [2] = 2
 [5] = 5
 [3] = 3
 [1,4,2] = 7
 [4,2,5] = 11
 [2,5,3] = 10
 [1,4,2,5,3] = 15
 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 示例 2：

 输入：arr = [1,2]
 输出：3
 解释：总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。
 示例 3：

 输入：arr = [10,11,12]
 输出：66


 提示：

 1 <= arr.length <= 100
 1 <= arr[i] <= 1000
 */


/**
 * method1
 * 思路：
 * 1. 遍历当前数组，当遇到奇数数组长度时，将当前子数组的长度定为当前奇数
 * 2. 根据数组长度获取所有可能的子数组，然后计算所有子数组的和
 *
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let l = arr.length, resArr = []
    for (let i = 0; i <= l; i++) {
        if (i % 2 !== 0) {
            let subL = i
            for (let j = 0; j < l - subL + 1; j++) {
                let subArr = arr.slice(j, j + subL)
                resArr = resArr.concat(subArr)
            }
        }
    }
    return resArr.reduce((prev, current) => prev + current)
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
