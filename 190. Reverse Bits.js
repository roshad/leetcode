var reverseBits = function (n) {
    let r = 0
    for (let i = 0; i < 32; i++) {
        r <<= 1
        r += n & 1
        n >>= 1
    }
    return r>>>0
};

