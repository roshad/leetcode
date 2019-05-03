//自己设想的是构建2D array，但列的变化用不到
let convert = function (s, numRows) {
    //numRows==1时，有s.length row，但不影响结果
    let result = []
    let step = 1, row = 0;
    for (let i = 0; i < s.length; i++) {
        if(result[row] === undefined) result[row] = ''
        result[row] += s[i];

        if (row === 0) step = 1
        else if (row === numRows - 1) step = -1;

        row += step;
    }
    return result.join('');
};