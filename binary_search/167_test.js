/**
 167. 两数之和 II - 输入有序数组
 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

 示例 1：

 输入：numbers = [2,7,11,15], target = 9
 输出：[1,2]
 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 示例 2：

 输入：numbers = [2,3,4], target = 6
 输出：[1,3]
 示例 3：

 输入：numbers = [-1,0], target = -1
 输出：[1,2]


 提示：

 2 <= numbers.length <= 3 * 104
 -1000 <= numbers[i] <= 1000
 numbers 按 递增顺序 排列
 -1000 <= target <= 1000
 仅存在一个有效答案
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//     let left = 0, right = numbers.length - 1, mid = 0
//     while (left <= right) {
//         let leftNum = numbers[left], rightNum = numbers[right]
//         if (leftNum + rightNum === target) {
//             return [left + 1, right + 1]
//         } else if (leftNum + rightNum < target) {
//             left += 1
//         } else if (leftNum + rightNum > target) {
//             right -= 1
//         }
//     }
// };

/**
 * method2 暴力枚举
 * @param numbers
 * @param target
 * @returns {number[]}
 */
var twoSum = function (numbers, target) {
    let l = numbers.length
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            let sum = numbers[i] + numbers[j]
            if (sum === target) {
                return [i + 1, j + 1]
            }
        }
    }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 5, 7, 9, 10, 13], 6));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([-1000, -1, 0, 1], 1));

