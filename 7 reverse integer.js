// array的reverse是O(n)的

//lg(x)
var reverse = function(x) {
    
    let ret=0,lim=2**31   
    
    while (x!==0){        
        ret=ret*10+ x%10
        x=Math.trunc(x/10)//floor不能用于负数
    }
    
    return ret<-(lim) || ret>(lim-1)?0:ret
}