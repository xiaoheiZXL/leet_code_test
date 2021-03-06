/**
 *
 剑指 Offer 14- II. 剪绳子 II
 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 示例 1：

 输入: 2
 输出: 1
 解释: 2 = 1 + 1, 1 × 1 = 1
 示例 2:

 输入: 10
 输出: 36
 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

 提示：

 2 <= n <= 1000
 注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/

 */

/**
 * 参考题解
 * 核心思路： 尽可能把绳子分成长度为3 的小段，这样成绩最大 (数学证明)
 * 当 n < 4 时， 最大乘积为：n - 1( n=3,max = 2,n=2,max = 1)
 * 当 n = 4 时， 最大乘积为：4
 * 当 n > 4 时， 将 n 尽可能的分成 每段为 3的小段，每次循环成都 n 减去3， 乘积 乘以3，最后返回时乘以小于等于4 的最后一小段，每次乘法操作后记需要取余
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) return n - 1
  if (n === 4) return 4
  let res = 1
  if (n > 4) {
    while (n > 4) {
      res = res * 3 % 1000000007
      n -= 3
    }
  }
  return res * n % 1000000007
}

console.log(cuttingRope(1000000008))
