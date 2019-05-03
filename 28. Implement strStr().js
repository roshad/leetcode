var strStr = function (haystack, needle) {
    let first_cha = needle[0]

    if (!needle) return 0
    if (needle.length > haystack.length) return -1
    for (let i in haystack) {
        if (haystack[i] == first_cha) {
            if (test(i)) return i
            //console.log(i)
        }
    }
    return -1
    function test(ind) {
        for (let cha of needle) {
            //console.log(haystack[ind],cha)
            if (haystack[ind] != cha) return false

            ind++
        }
        return true
    }
};

var strStr = function (haystack, needle) {
    let n_l = needle.length, h_l = haystack.length
    if (n_l == 0) return 0;
    if (h_l < n_l) return -1;

    for (var i = 0; i <= h_l - n_l; i++) {
        if (haystack.slice(i, i + n_l) === needle) return i;
    }
    return -1; 
}
