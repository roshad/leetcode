var plusOne = function (digits) {
    let carry = 1, ind = digits.length - 1
    while (carry && ind > -1) {
        if (digits[ind] == 9) {
            digits[ind--] = 0
        }
        else {
            digits[ind]++
            carry = 0
        }

    }
    if (carry) digits.unshift(1)
    return digits
};
var plusOne = function (digits) {
    (function process(ind) {
        if (ind == -1) digits.unshift(1);
        if (++digits[ind] > 9) {
            digits[ind] = 0;
            process(ind - 1);
        }
    })(digits.length - 1);
    return digits;
};

