var reverseBits = function (n) {
    let count =32,ret=0
    while (count){
        ret<<=1 ////第32位写入后不需要移,故而摆到写入之前,无效化一次移动
        ret+=n&1
        count--        
        n>>=1        
    }
    return ret >>>0
}
