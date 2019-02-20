/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var s = 0;
    var item = [];
    var left = 0;
    var leftItem = 0;
    var prev = 0;
    var spaces = ''
    var result = [];
    
    for(var i = 0; i < words.length; i++) {
        var nextLen = s ? s + words[i].length + 1 : s + words[i].length;
        if (s < maxWidth && nextLen <= maxWidth) {
            if (item.length) {
                item.push(' ' + words[i]);
                s += words[i].length + 1;                
            } else {
                item.push(words[i]);
                s += words[i].length;
            }
        } else {
            left = maxWidth - s;
            leftItem = item.length - 1 > left ? left : item.length - 1;
            spaces = '';
            if (!leftItem && left) {
                for(var j = 0; j < left; j++) {
                    spaces += ' '
                }             
                item[leftItem] += spaces;
            }            
            while(left && leftItem) {
                prev = parseInt(left/leftItem)
                for(var j = 0; j < prev; j++) {
                    spaces += ' '
                }
                item[leftItem] = spaces + item[leftItem]
                left = left % leftItem;
                leftItem--;
                while(left < leftItem) {
                    item[leftItem] = spaces + item[leftItem];
                    leftItem--;
                }
            }
            
            result.push(item.join(''));
            
            item = [words[i]];
            s = words[i].length;
        }
    }
    
    if(item.length) {
        var curr = item.join('')
        prev = maxWidth - curr.length;
        spaces = ''
        for(var j = 0; j < prev; j++) {
            spaces += ' '
        }
        result.push(curr + spaces);
    }
    
    return result;
};