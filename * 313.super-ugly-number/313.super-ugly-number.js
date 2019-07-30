/*
 * @lc app=leetcode id=313 lang=javascript
 * 注意数学上判断大小的方法
 * [313] Super Ugly Number
 */
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var ptr = []
    var ugly = [1]
    var max = Math.pow(2, 31) - 1;

    for(var i = 0; i < primes.length; i++) {
        ptr[i] = 0;
    }

    // debugger;
    for(var i = 1; i < n; i++) {
        var min = max
        for(var j = 0; j < primes.length; j++) {
            min = Math.min(min, primes[j] * ugly[ptr[j]])
        }

        ugly[i] = min;

        // 下标加 1
        for(var j = 0; j < primes.length; j++) {
            if (!(min%primes[j])) {
                ptr[j]++
            }
        }
    }
    
    // console.log(ugly)
    return ugly[n - 1]
};

