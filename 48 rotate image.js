var rotate = function (matrix) {
    let len = matrix.length, max_ind = len - 1

    for (let y_ind = 0; y_ind < Math.floor(len / 2); y_ind++)
        for (let x_ind = y_ind; x_ind < max_ind - y_ind; x_ind++) {
            const tem = matrix[y_ind][x_ind]
            matrix[y_ind][x_ind] = matrix[max_ind - x_ind][y_ind]
            matrix[max_ind - x_ind][y_ind] = matrix[max_ind - y_ind][max_ind - x_ind]
            matrix[max_ind - y_ind][max_ind - x_ind] = matrix[x_ind][max_ind - y_ind]
            matrix[x_ind][max_ind - y_ind] = tem
        }
}