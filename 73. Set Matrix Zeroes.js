function setZeroes(matrix) {
    const
        clen = matrix.length,
        rlen = matrix[0].length
    let c0 = false

    for (let yi = 0; yi < clen; yi++) {
        if (matrix[yi][0] == 0) c0 = true
        for (let xi = 1; xi < rlen; xi++)
            if (matrix[yi][xi] == 0)
                matrix[yi][0] = matrix[0][xi] = 0

    }

    for (let yi = clen - 1; yi > -1; yi--) {
        for (let xi = rlen - 1; xi > 0; xi--)
            if (matrix[yi][0] == 0 || matrix[0][xi] == 0)
                matrix[yi][xi] = 0

        if (c0 == true) matrix[yi][0] = 0
    }
}