var setZeroes = function(matrix) {
    let c0 = 1;
    for (let row in matrix) {
        if (!matrix[row][0]) c0 = 0;
        for (let col = 1; col < matrix[0].length; col++)
            if (matrix[row][col] == 0) matrix[row][0] = matrix[0][col] = 0;
    }

    for (let row = matrix.length - 1; row > -1; row--) {
        for (let col = matrix[0].length - 1; col > 0; col--) {
            if (matrix[row][0] == 0 || matrix[0][col] == 0)
                matrix[row][col] = 0;
        }
        if (c0 == 0) matrix[row][0] = 0;
    }
};
