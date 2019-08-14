//1
var strStr = function(haystack, needle) {
    let first_cha = needle[0];

    if (!needle) return 0;
    if (needle.length > haystack.length) return -1;
    for (let i in haystack) {
        if (haystack[i] == first_cha) {
            if (test(i)) return i;
        }
    }
    return -1;
    function test(ind) {
        for (let cha of needle) {
            if (haystack[ind] != cha) return false;
            ind++;
        }
        return true;
    }
};
//2
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    const hlen = haystack.length,
        nlen = needle.length;
    for (let i = 0; i <= hlen - nlen; i++)
        if (haystack.slice(i, i + nlen) === needle) return i;
    return -1;
};

function strStr(haystack, needle) {
    if (!needle.length) return 0;

    const hay_len = haystack.length,
        nee_len = needle.length;
    let nee_head_ind = 0;
    const move = {};
    for (let i = 0; i < nee_len; i++) move[needle[i]] = nee_len - i;
    while (nee_head_ind <= hay_len - nee_len) {
        for (let next_nee_cha_ind = 0; ; next_nee_cha_ind++) {
            if (
                haystack[nee_head_ind + next_nee_cha_ind] !=
                needle[next_nee_cha_ind]
            )
                break;

            if (next_nee_cha_ind == nee_len) return nee_head_ind;
        }
        nee_head_ind += move[haystack[nee_head_ind + nee_len]] || nee_len;
    }
    return -1;
}
