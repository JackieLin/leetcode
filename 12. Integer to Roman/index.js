/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var digits = 0;
    var result = [];
    var temp = '';
    while(num) {
        var suffix = num%10;
        temp = '';
        if (suffix > 0 &&  suffix < 4) {
            for(var i = 0; i < suffix; i++) {
                if (digits === 0) {
                    temp += 'I';
                } else if (digits === 1) {
                    temp += 'X';
                } else if (digits === 2) {
                    temp += 'C';
                } else {
                    temp += 'M';
                }
            }
        } else if (suffix === 4) {
            if (digits === 0) {
                temp += 'IV';
            } else if (digits === 1) {
                temp += 'XL';
            } else if (digits === 2) {
                temp += 'CD';
            }
        } else if (suffix === 5) {
            if (digits === 0) {
                temp += 'V';
            } else if (digits === 1) {
                temp += 'L';
            } else if (digits === 2) {
                temp += 'D';
            }
        } else if (suffix > 5 && suffix < 9) {
            if (digits === 0) {
                temp += 'V';
            } else if (digits === 1) {
                temp += 'L';
            } else if (digits === 2) {
                temp += 'D';
            }
            for(var i = 0; i < suffix - 5; i++) {
                if (digits === 0) {
                    temp += 'I';
                } else if (digits === 1) {
                    temp += 'X';
                } else if (digits === 2) {
                    temp += 'C';
                } else {
                    temp += 'M';
                }
            }
        } else if (suffix === 9) {
            if (digits === 0) {
                temp += 'IX';
            } else if (digits === 1) {
                temp += 'XC';
            } else if (digits === 2) {
                temp += 'CM';
            }
        }

        num = parseInt(num / 10);
        if (temp) {
            result.push(temp);
        }
        digits++;
    }

    return result.reverse().join("");
};