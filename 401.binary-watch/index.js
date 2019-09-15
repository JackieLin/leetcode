/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var hours = [1, 2, 4, 8]
    var minus = [1, 2, 4, 8, 16, 32]
    var result = new Set()

    function dfs(num, seq) {
        // 结束
        if (num === 0) {
            var hour = 0;
            var minu = 0;

            for(var i = 0; i < seq.length; i++) {
                if (seq[i] < 4) {
                    hour += hours[seq[i]]
                } else {
                    minu += minus[seq[i] - 4]
                }
            }

            if (hour > 11 || minu > 59) { return }

            if (minu < 10) {
                minu = `0${minu}`
            };

            result.add(`${hour}:${minu}`)
            return;
        }

        for(var i = 0; i < 10; i++) {
            if (seq.indexOf(i) >= 0) continue;
            seq.push(i)
            dfs(num - 1, seq)
            seq.pop();
        }
    }

    dfs(num, [])

    return Array.from(result)
};

