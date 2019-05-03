var myPow = function (x, n) {
    if (n < 0) return 1 / myPow(x, -n)
    if (n == 0) return 1
    if (n % 2) return x * myPow(x, n - 1)
    return myPow(x * x, n >> 1)
};

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let res = 1
    while (n) {
        if (n & 1) {
            res *= x
            n -= 1
        }

        x *= x
        n /= 2
    }
    return res
}