var plusOne = function(digits) {
    (function process(index){
        if (index==-1) {
            digits.unshift(1)
            return 
        }
        if (++digits[index]>9) {
            digits[index]=0
            process(index-1)
        }
    })(digits.length-1)
    return digits
};