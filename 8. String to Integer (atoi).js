var myAtoi = function (str) {

    let i = 0;

    while (str[i] === " ") i++;

    let sign = str[i] === "-" ? -1 : 1;
    if (str[i] === "+" || str[i] === "-") i++;

    let numerals = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9 };  //obj 既滤除非digit，又将str转为int
    let result = 0;
    while (str[i] in numerals) {
        result = result * 10 + numerals[str[i]];
        i++;
    }

    result *= sign;

    let limit = 2 ** 31

    return (
        result > limit - 1 ? limit - 1 :
            result < -limit ? -limit :
                result
    )
};

var myAtoi = function (str) {
    const MAX = 2**31
    str = str.trim()
    str = str.match(/^[-+\d]?\d+/)
    
    return (
        str<=-MAX? -MAX:
        str>=MAX-1? MAX-1:
        str
    )
}