var reverseBits = function (n) {
    let count =32,ret=0
    while (count--){
        ret<<=1 
        ret+=n&1              
        n>>=1        
    }
    //写入,移的操作只能进行31次,否则最前会被消除,所以移写入
    return ret >>>0
}
