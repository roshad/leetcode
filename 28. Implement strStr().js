//sunday
var strStr = function(haystack, needle) {
    const [hL, nL] = [haystack.length, needle.length],
        move = {};
    for (let i = 0; i < nL; i++) move[needle[i]] = nL - i;
    //console.log(move)
    for (
        let nee_head_ind = 0;
        nee_head_ind <= hL - nL;
        nee_head_ind += move[haystack[nee_head_ind + nL]] || nL + 1
    ) {
        for (nee_tra_i = 0;; nee_tra_i++) {
            if (nee_tra_i == nL) return nee_head_ind;
            if (haystack[nee_tra_i + nee_head_ind] != needle[nee_tra_i]) break;
        }        
    }
    return -1;
};
