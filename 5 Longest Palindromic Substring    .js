//穷举法 for开头for结尾，for检查，n^3

//倒置法 for开头for结尾 n^2

//中扩 n遍历 n扩展 n^2
function longestPalindrome(s) {
    let slen = s.length;
    start = end = 0;
    if (s.length < 2) return "";

    function expandAroundcenter_ind(s, left, right) {
        let L = left,
            R = right;
        while (L >= 0 && R < slen && s.charCodeAt(L) == s.charCodeAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
    for (let i = 0; i < slen; i++) {
        let len1 = expandAroundcenter_ind(s, i, i);
        let len2 = expandAroundcenter_ind(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return (s.substr = (start, end + 1));
}

//中扩 优化
var longestPalindrome = function(s) {
    let slen = s.length,
        max = 0,
        sta = 0;

    for (let i = 0; i < slen; ) {
        let left = (right = i);
        if (slen - i <= max / 2) break; //简化，可无

        while (s[right] == s[right + 1]) right++;
        i = right + 1;

        while (s[left] === (s[right] || 0)) {
            left--;
            right++;
        } //||避免 全体对称 时 同时und 导致循环

        if (right - left - 1 > max) {
            max = right - left - 1;
            sta = left + 1;
        }
    }
    return s.substr(sta, max);
};
//manacher
function longestPalindrome(s) {
    let pS = "^#";
    for (let cha of s) pS += cha + "#";
    pS += "*";
    const radList = new Array(pS.length).fill(0);
    let pldRB = 0,
        pldC = 0,
        maxC = 0,
        maxRad = 0;
    for (let ind = 2; ind < pS.length - 2; ind++) {
        radList[ind] = Math.min(radList[2 * pldC - ind] || 0, pldRB - ind);
        while (pS[ind + radList[ind] + 1] == pS[ind - radList[ind] - 1])
            radList[ind]++;
        if (radList[ind] + ind > pldRB) {
            pldRB = ind + radList[ind];
            pldC = ind;
        }
        if (radList[ind] > maxRad) {
            maxRad = radList[ind];
            maxC = ind;
        }
    }
    const start = Math.floor((maxC - maxRad) / 2);
    return s.substring(start, start + maxRad);
}
