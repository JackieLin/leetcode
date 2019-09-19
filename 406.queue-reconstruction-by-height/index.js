/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */
//  /**
//  * @param {number[][]} people
//  * @return {number[][]}
//  */
// var reconstructQueue = function(people) {
//     const queue = [];
    
//     const sorted = people.sort((a, b) => {
//       if (a[0] === b[0]) {
//         return a[1] - b[1]
//       }
//       return b[0] - a[0]
//     }); console.log(sorted)
    
//     sorted.forEach(person => {
//       queue.splice(person[1], 0, person);
//     })
    
//     return queue;
    
    
//   };
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people = people.sort((a, b) => a[0] - b[0])

    // console.log(people)

    var result = []

    while(people.length) {
        for(var i = 0; i < people.length; i++) {
            var item = people[i]
            var num = 0
            for(var j = 0; j < result.length; j++) {
                if (result[j][0] >= item[0]) num++
            }

            // 符合
            if (num === item[1]) {
                people.splice(i, 1)
                result.push(item)
                break;
            }
        }    
    }

    return result;
};

