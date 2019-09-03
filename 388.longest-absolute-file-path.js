/*
 * @lc app=leetcode id=388 lang=javascript
 *
 * [388] Longest Absolute File Path
 */
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    var input = input.split('\n');
    var head = null
    var current = null
    var max = Number.MIN_SAFE_INTEGER;

    for (var i = 0; i < input.length; i++) {
        var item = input[i]
        var tabNum = item.lastIndexOf('\t') + 1
        if (!current && !tabNum) {
            head = current = {
                value: item,
                next: [],
                parent: null,
                level: 0
            }
        } else {
            var node = {
                value: item.substring(tabNum),
                next: [],
                parent: current,
                level: tabNum
            }

            // 子节点
            if (current && current.level + 1 === tabNum) {
                current.next.push(node);
                current = node;
            } else if (current && current.level >= tabNum) {
                do {
                    current = current.parent
                } while (current && current.level + 1 !== tabNum)

                if (!current) return 0;
                node.parent = current;
                current.next.push(node);
                current = node;
            }
        }
    }

    function dfs(node, path) {
        // 叶子节点
        if (!node.next.length) {
            const length = `${path}/${node.value}`.slice(1).length;
            console.log(`${path}/${node.value}`.slice(1))
            if (length > max) max = length;
            return;
        }

        for(var i = 0; i < node.next.length; i++) {
            dfs(node.next[i], `${path}/${node.value}`)
        }
    }

    dfs(head, '')
    return max;
};

