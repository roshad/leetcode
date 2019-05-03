var mySqrt = function(x) {
    let r=x
    while (r*r>x){
        r= (r+r/x)/2|0
    }
    return r
}