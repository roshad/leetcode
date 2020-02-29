var hammingWeight = function(n) {
    let ret =0    
    while(n){        
        if (n%2) ret++
        n=Math.floor(n/2)
    }
    return ret
};
// bit
var hammingWeight = function(n) {
    let count=0
    while (n){
        if (n&1) count++
        n>>>=1        
    }
    return count
};