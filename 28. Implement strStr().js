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
    if (!needle)return 0
    const hlen=haystack.length,nlen=needle.length
    for (let i=0;i<=hlen-nlen;i++)
        if (haystack.slice(i,i+nlen)===needle)return i
    return -1
}
