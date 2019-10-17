var romanToInt = function(s) {
    let ret = 0;
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let ind = 0; ind < s.length; ind++) {
        const cN = map[s[ind]],
            nN = map[s[ind + 1]];
        ret += cN < nN ? -cN : cN;
    }
    return ret;
};
