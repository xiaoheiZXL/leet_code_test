/**
 942. 增减字符串匹配
 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

 如果 S[i] === "I"，那么 A[i] < A[i+1]
 如果 S[i] === "D"，那么 A[i] > A[i+1]

 示例 1：

 输入："IDID"
 输出：[0,4,1,3,2]
 示例 2：

 输入："III"
 输出：[0,1,2,3]
 示例 3：

 输入："DDI"
 输出：[3,2,0,1]

 提示：

 1 <= S.length <= 10000
 S 只包含字符 "I" 或 "D"。

 */

/**
 * 思路：遍历当前字符串s, 如果 s[i] === "I",则 res[0] 为0 时，可以满足条件
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const l = s.length
  let res = []

  let start = 0; let end = l
  for (let i = 0; i <= l; i++) {
    if (s[i] === 'I') {
      res[i] = start++
    } else {
      res[i] = end--
    }
  }
  return res
}

// const s = "IDID"
// const s = "III"
const s = 'DDI'
console.log(diStringMatch(s))
