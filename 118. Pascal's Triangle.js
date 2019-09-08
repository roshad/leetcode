var generate = function(n) {
    if (n == 0) return [];
    const ret = [[1]];
    for (let i = 1; i < n; i++) {
        ret.push([]);
        for (let i_num = 0; i_num < i + 1; i_num++) {
            ret[i][i_num] =
                (ret[i - 1][i_num - 1] || 0) + (ret[i - 1][i_num] || 0);
        }
    }
    return ret;
};
