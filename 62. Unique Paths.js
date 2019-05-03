var uniquePaths = function (m, n) {
    let
        big = Math.max(m, n),
        sma = Math.min(m, n),
        mem = Array(sma).fill(1)
    for (let i_b = 1; i_b < big; i_b++) {
        for (let i_s = 1; i_s < sma; i_s++) {
            mem[i_s] = mem[i_s] + mem[i_s - 1]
        }
    }
    return mem[sma - 1]
}