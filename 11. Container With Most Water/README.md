### 原题
[https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)

### 思路
采用暴力解法，所有情况全部列出来，然后取出最大的情况;

### 复杂度
时间复杂度：O(n^2), 空间复杂度：O(1)

### 最佳解法
采用贪心算法可以去掉很多计算的情况，从两边开始算，那边比较小就直接舍弃掉哪边，因为这时候小的那边的所有情况都是没有意义的

### 复杂度
时间复杂度：O(n), 空间复杂度：O(1)
