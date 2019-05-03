// array的reverse是O(n)的

//lg(x)
var reverse = function(x) {
    const 
        MIN = -(2**31),
        MAX = 2**31-1

    let r =0
    while (x!=0){//反过来
        r=r*10 + x%10
        x= Math.trunc(x/10)
    }
    return (r < MIN|| r > MAX) ? 0 : r;
    
};