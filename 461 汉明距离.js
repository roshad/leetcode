var hammingDistance = function(x, y) {
    (x ^= y), (y = 0);
    while (x) {
        y++
        x &=x-1;
    }
    return y;
};