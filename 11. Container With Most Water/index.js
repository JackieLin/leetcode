/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // var a = [];
    var result = 0;
    // for(var i = 0; i < height.length; i++) {
    //     for(var j = 0; j < height.length; j++) {
    //         if (j < i) continue;
    //         if (!a[i]) {
    //             a[i] = [];
    //         }

    //         a[i][j] = (Math.min(height[j], height[i])) * (j - i);
    //     }
    // }

    for(var i = 0; i < height.length - 1; i++) {
        for(var j = i + 1; j < height.length; j++) {
            result = Math.max(result, (Math.min(height[j], height[i])) * (j - i));
        }
    }

    return result;
};