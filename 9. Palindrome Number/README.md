### 原题
[https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

### 思路
取出数字和插入数字采用数学的表示方式如下：（不采用数组等影响空间复杂度）

//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;

如何判断回文串已经到了一半
只要判断保留的一半小于重置的一半肯定就是没有问题的

### 复杂度
时间复杂度：O(log(x/2)), 空间复杂度：O(1)