// /*
//  * @lc app=leetcode id=388 lang=javascript
//  *
//  * [388] Longest Absolute File Path
//  */
// /**
//  * @param {string} input
//  * @return {number}
//  */
// var lengthLongestPath = function (input) {
//     var input = input.split('\n');
//     var head = null
//     var current = null
//     var max = 0;

//     for (var i = 0; i < input.length; i++) {
//         var item = input[i]
//         var tabNum = item.lastIndexOf('\t') + 1
//         var spaces = item.split('    ');
//         var spaceNum = spaces.length - 1
//         tabNum = tabNum > spaceNum ? tabNum : spaceNum;
//         var value =  tabNum > spaceNum ? item.substring(tabNum) : spaces[spaceNum]

//         if (!current && !tabNum) {
//             head = current = {
//                 value: value,
//                 next: [],
//                 parent: null,
//                 level: 0
//             }
//         } else {
//             var node = {
//                 value,
//                 next: [],
//                 parent: current,
//                 level: tabNum
//             }

//             // 子节点
//             if (current && current.level + 1 === tabNum) {
//                 current.next.push(node);
//                 current = node;
//             } else if (current && current.level >= tabNum) {
//                 do {
//                     current = current.parent
//                 } while (current && current.level + 1 !== tabNum)

//                 if (!current) return 0;
//                 node.parent = current;
//                 current.next.push(node);
//                 current = node;
//             }
//         }
//     }

//     // console.log(head)
//     function dfs(node, path) {
//         // 叶子节点
//         if (!node.next.length) {
//             var dot = node.value.lastIndexOf('.')
//             // 文件才进行计算
//             if (dot > 0 && dot < node.value.length - 1) {
//                 const length = `${path}/${node.value}`.slice(1).length;
//                 if (length > max) max = length;    
//             }
//             // console.log(`${path}/${node.value}`.slice(1))
//             return;
//         }

//         for(var i = 0; i < node.next.length; i++) {
//             dfs(node.next[i], `${path}/${node.value}`)
//         }
//     }

//     dfs(head, '')
//     return max;
// };



function lengthLongestPath(input) {
	var stack = [];

	return input.split('\n').reduce((max, p) => {
        debugger
		var level = p.lastIndexOf('\t') + 1;
		stack[level] = p.length - level + (level ? stack[level - 1] : 0);
		return p.indexOf('.') === -1 ? max : Math.max(max, stack[level] + level);
	}, 0);
}