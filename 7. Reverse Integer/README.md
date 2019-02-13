### 原题
[https://leetcode.com/problems/reverse-integer/](https://leetcode.com/problems/reverse-integer/)

### 思路
取出数字和插入数字采用数学的表示方式如下：（不采用数组等影响空间复杂度）

//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;

### 复杂度
时间复杂度：O(log(x)), 空间复杂度：O(1)