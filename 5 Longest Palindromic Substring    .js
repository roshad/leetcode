//穷举法 for开头for结尾，for检查，n^3

//倒置法 for开头for结尾 n^2 

//中扩 n遍历 n扩展 n^2
function longestPalindrome(s) {

    let
        slen = s.length
    start = end = 0;
    if (s.length < 2) return "";

    function expandAroundCenter(s, left, right) {
        let L = left, R = right;
        while (L >= 0 && R < slen && s.charCodeAt(L) == s.charCodeAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
    for (let i = 0; i < slen; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substr = (start, end + 1);
}


//中扩 优化
var longestPalindrome = function (s) {
    let slen = s.length, max = 0, sta = 0

    for (let i = 0; i < slen;) {
        let left = right = i        
        if (slen - i <= max / 2) break //简化，可无
        
        while (s[right] == s[right + 1]) right++ 
        i = right + 1
        
        while (s[left] === (s[right] || 0)) { left--; right++ }//||避免 全体对称 时 同时und 导致循环

        if (right - left - 1 > max) {
            max = right - left - 1
            sta = left + 1
        }
        
    }
    return s.substr(sta, max)
};