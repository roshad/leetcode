var countAndSay = function (n) {
    let cur_num = '1'
    while (n > 1) {
        let next_num = ''
        for (let ind = 0; ind < cur_num.length;) {
            let cur_digit = cur_num[ind], cur_digit_amount = 1

            while (cur_num[ind] === cur_num[++ind]) { cur_digit_amount++ }

            next_num += cur_digit_amount + "" + cur_digit

        }
        cur_num = next_num
        n--
    }
    return cur_num
}