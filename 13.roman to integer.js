map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
var romanToInt = function(s) {
    let value = 0;
    for (let i = 0; i < s.length; i++)
        map[s[i]] < map[s[i + 1]] ? (value -= map[s[i]]) : (value += map[s[i]]);

    return value;
};
