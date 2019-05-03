const letterCombinations = function (digits) {
    var chars = [
        , ,
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    if (!digits) return []

    let pre_res = chars[digits[0]]
    for (let ind = 1; ind < digits.length; ind++) {
        let cur = chars[digits[ind]]

        let cur_res = []
        for (let str1 of pre_res)
            for (let str2 of cur)
                cur_res.push(str1 + str2)
        pre_res = cur_res
    }
    return pre_res
}

