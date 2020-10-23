var hammingDistance = function (x, y) {
    (x ^= y)//所有不同
        (y = 0);
    while (x) {
        y++
        x &= x - 1;
    }//每轮去掉一位不同
    return y;
};