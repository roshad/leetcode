//sunday
function strStr(haystack, needle) {
    if (!needle.length) return 0;
    const hay_len = haystack.length,
        nee_len = needle.length;
    let nee_head_ind = 0;
    const last = {}
    for (let i=0;i<nee_len;i++)
        last[needle[i]]=nee_len-i
    while (nee_head_ind <= hay_len - nee_len) {
        nee_ind = 0;
        while (
            haystack[nee_head_ind + nee_ind] ==
            needle[nee_ind]
        ) {
            nee_ind++;
            if (nee_ind == nee_len) return nee_head_ind;
        }
        nee_head_ind += last[haystack[nee_head_ind + nee_len]]||nee_len;
    }
    return -1;
}