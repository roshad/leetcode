var rotate = function (matrix) {
  const len = matrix.length,
    max_ind = len - 1;
  for (let i1 = 0; i1 < Math.floor(len / 2); i1++) {
    for (let i2 = 0; i2 < Math.floor((len + 1) / 2); i2++) {
      [
        matrix[i2][i1],
        matrix[max_ind - i1][i2],
        matrix[max_ind - i2][max_ind - i1],
        matrix[i1][max_ind - i2],
      ] = [
        matrix[max_ind - i1][i2],
        matrix[max_ind - i2][max_ind - i1],
        matrix[i1][max_ind - i2],
        matrix[i2][i1],
      ];
    }
  }
};
