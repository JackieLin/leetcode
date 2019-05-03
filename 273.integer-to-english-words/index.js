/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var units = ['', ' Thousand ', ' Million ', ' Billion '];
    var datas = [];
    var english = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Twenty One","Twenty Two","Twenty Three","Twenty Four","Twenty Five","Twenty Six","Twenty Seven","Twenty Eight","Twenty Nine","Thirty","Thirty One","Thirty Two","Thirty Three","Thirty Four","Thirty Five","Thirty Six","Thirty Seven","Thirty Eight","Thirty Nine","Forty","Forty One","Forty Two","Forty Three","Forty Four","Forty Five","Forty Six","Forty Seven","Forty Eight","Forty Nine","Fifty","Fifty One","Fifty Two","Fifty Three","Fifty Four","Fifty Five","Fifty Six","Fifty Seven","Fifty Eight","Fifty Nine","Sixty","Sixty One","Sixty Two","Sixty Three","Sixty Four","Sixty Five","Sixty Six","Sixty Seven","Sixty Eight","Sixty Nine","Seventy","Seventy One","Seventy Two","Seventy Three","Seventy Four","Seventy Five","Seventy Six","Seventy Seven","Seventy Eight","Seventy Nine","Eighty","Eighty One","Eighty Two","Eighty Three","Eighty Four","Eighty Five","Eighty Six","Eighty Seven","Eighty Eight","Eighty Nine","Ninety","Ninety One","Ninety Two","Ninety Three","Ninety Four","Ninety Five","Ninety Six","Ninety Seven","Ninety Eight","Ninety Nine"]
    var results = []
    if (!num) return 'Zero';
    
    // debugger;
    while(num) {
        datas.push(num % 1000);
        num = Math.floor(num / 1000);
    }

    for(var i = 0; i < datas.length; i++) {
        var item = datas[i];
        var tenth = item % 100;
        var chars = ''
        var handred = parseInt(item / 100);
        if (handred) {
            chars += english[handred - 1] + " Hundred ";
        }
        if (tenth) {
            chars += english[tenth - 1];
        } else {
            chars = chars.slice(0, -1);
        }

        if (chars) {
            chars += units[i];
        }

        results.push(chars);
    }

    return results.reverse().join('').trim();
};

