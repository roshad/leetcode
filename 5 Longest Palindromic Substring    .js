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
    function preProcess(s) {
        let processed = "";
        for (let cha of s) processed += "#" + cha;
        return "^" + processed + "#*";
    }
    const processed = preProcess(s);

    function getRad() {
        let p_len = processed.length;
        const mem_rad = new Array(processed.length).fill(0);
        let r_bound = 0,
            center_ind = 0;
        for (let i = 1; i < p_len - 1; i++) {
            mirror_ind = 2 * center_ind - i;
            if (r_bound > i)
                mem_rad[i] = Math.min(mem_rad[mirror_ind], r_bound - i);

            while (
                processed.charAt(i - mem_rad[i] - 1) ===
                processed.charAt(i + mem_rad[i] + 1)
            )
                mem_rad[i]++;

            if (i + mem_rad[i] > r_bound) {
                r_bound = i + mem_rad[i];
                center_ind = i;
            }
        }
        return mem_rad;
    }
    const radList = getRad();
    let max_rad = 0;
    for (let i in radList) {
        if (radList[i] > max_rad) {
            center_ind = i;
            max_rad = radList[i];
        }
    }
    const start = Math.floor((center_ind - max_rad) / 2);
    return s.substring(start, start + max_rad);
}
