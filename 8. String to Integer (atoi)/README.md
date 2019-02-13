### 原题
[https://leetcode.com/problems/string-to-integer-atoi/](https://leetcode.com/problems/string-to-integer-atoi/)

### 思路
js parseInt 本身就能直接去掉多余的字符串的

### 最佳解法

```
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};
```

### 复杂度
时间复杂度：O(n), 空间复杂度：O(1)