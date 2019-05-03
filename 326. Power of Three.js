const isPowerOfThree = function (n) {
    if (n === 0) return false;
    else {
        while (n % 3 === 0) n /= 3;

        return n === 1;
    }
}

const isPowerOfThree = (n) => n > 0 && 617673396283947 % n == 0