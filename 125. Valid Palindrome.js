//2
// pS 需要space,否则每步检查是否由字母与或数字组成
var isPalindrome = function (s) {
    const pS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    for (let head = 0, tail = pS.length - 1; head < tail; head++, tail--) {
        if (pS[head] != pS[tail]) return false
    }
    return true
};

// space为O(1)的，每步检查是否为

function isPalindrome(s) {
    var left, n, right;
    n = s.length;
    [left, right] = [0, n - 1];
    while (left < right) {
        while (left < right && !s[left].match(/[a-zA-Z0-9]/g)) {
            left += 1;
        }

        while (left < right && !s[right].match(/[a-zA-Z0-9]/g)) {
            right -= 1;
        }

        if (left < right) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            [left, right] = [left + 1, right - 1];
        }
    }

    return true;
}