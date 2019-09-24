//1.2
var lengthOfLongestSubstring = function(s) {
    const mem={}
    let ret=0    
    for (indL=0,indR=0;indR<s.length;indR++){
        const cha = s[indR]
        indL=Math.max((mem[cha]+1)||0,indL)
        ret=Math.max(ret,indR-indL+1)            
        mem[cha]=indR        
    }
    return ret
};