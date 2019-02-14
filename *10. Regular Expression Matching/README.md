### 原题
[https://leetcode.com/problems/regular-expression-matching/](https://leetcode.com/problems/regular-expression-matching/)

### 思路

循环和递归是相辅相成的，两者可以互相转换；
可以采用递归思想的情况：将字符划分为很小的单元，比如只有一个字符，只有有限的几种情况，那就可以考虑采用
由于拥有最优子结构的性质，也可以采用动态规划
