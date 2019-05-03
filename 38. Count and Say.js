var countAndSay = function(n) {
    let num = "1",digit;

    while (n>1){
        let tem = ""
        for (let ind =0,amount=0;ind<num.length;ind++){
            digit = num[ind]
            while (num[ind]==digit) {
                ind++;amount++
            }
            console.log(digit,amount)
            tem += amount + digit
        }
        num = tem
        n--
    }
    return num
};