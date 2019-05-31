var plusOne = function(digits) {
    (function process(ind){        
        if (ind==-1) digits.unshift(1)
        if (++digits[ind]>9){
            digits[ind]=0
            process(ind-1)
        }
    })(digits.length-1)
    return digits
}