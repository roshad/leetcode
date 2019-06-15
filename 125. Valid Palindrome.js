//2
var isPalindrome = function (s) {
    let len = s.length
    s = s.toLowerCase()
    for (let i_sta=0,i_end=len-1;i_sta<len,i_end>0;i_sta++,i_end--){
        while (!s[i_sta].match(/[A-Za-z]/) && i_sta<len) i_sta++ //此处也需要溢出判断
        while (!s[i_end].match(/[A-Za-z]/) && i_end>0) i_end--
        
        if (s[i_sta]!==s[i_end]) return false
    }
    return true
}
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/\W+/g, "");
    
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++; j--;
    }
    return true;
};
