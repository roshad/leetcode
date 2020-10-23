//2
var isPalindrome = function(s) {
    const pS = s.toLowerCase().replace(/\W/g,"")
    for (let head=0,tail=pS.length-1;head<tail;head++,tail--)
        if (pS[head]!=pS[tail])return false
    return true
};