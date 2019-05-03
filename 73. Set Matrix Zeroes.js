function setZeroes(matrix) {
    let r0 = false
    let rLen = matrix[0].length;
    let cLen = matrix.length;

    for (let xi = 0; xi < rLen; xi++) {
        if (matrix[0][xi] == 0) r0 = true
        for (let yi = 1; yi < cLen; yi++) {
            if (matrix[yi][xi] == 0) {
                matrix[yi][0] = matrix[0][xi] = 0;
            }
        }
    }

    for (let xi = rLen - 1; xi > -1; xi--) {
        for (let yi = cLen - 1; yi > 0; yi--) {
            if (matrix[0][xi] == 0 || matrix[yi][0] == 0) {
                matrix[yi][xi] = 0
            }
        }
        if (r0 == true) matrix[0][xi] = 0
    }
}