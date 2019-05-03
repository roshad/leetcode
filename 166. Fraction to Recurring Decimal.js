function fractionToDecimal(numerator, denominator) {
    let num = numerator,den=denominator;

    if (num==0) return "0"

    let 
        res=Math.sign(num)==Math.sign(den)?"":"-",
        an = Math.abs(num),ad=Math.abs(den);

    res+=Math.trunc(an/ad)
    an%=ad
    
    if (an==0) return res

    res+="."
    let map ={}
    while (an!=0){
        map[an]=res.length
        an*=10
        res+=Math.trunc(an/ad)
        an%=ad
        let preLen = map[an]
        if (preLen) return `${res.substr(0,preLen)}(${res.substr(preLen)})`
    }
    return res
}