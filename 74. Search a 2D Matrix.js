function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false //应对读und err
    let
        ylen = matrix.length,
        xlen = matrix[0].length,
        ind_l = 0, ind_r = xlen * ylen - 1, ind_m
    while (ind_l < ind_r) {
        ind_m = ind_l + ind_r >> 1
        if (matrix[Math.floor(ind_m / xlen)][ind_m % xlen] < target) ind_l = ind_m + 1
        else ind_r = ind_m
    }
    return matrix[Math.floor(ind_l / xlen)][ind_l % xlen] == target
}