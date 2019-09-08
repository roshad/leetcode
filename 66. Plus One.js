var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i > -1; i--) {
        if (carry--) {
            if (++digits[i] > 9) {
                digits[i] = 0;
                carry = 1;
            } else break;
        }
    }
    if (carry == 1) digits.unshift(1);
    return digits;
};

var plusOne = function(digits) {
    (function process(ind) {
        if (ind == -1) digits.unshift(1);
        if (++digits[ind] > 9) {
            digits[ind] = 0;
            process(ind - 1);
        }
    })(digits.length - 1);
    return digits;
};

