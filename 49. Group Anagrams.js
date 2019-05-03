function groupAnagrams(strs) {
    const ht = {}, ret = []

    for (let str of strs) {
        let key = 0
        const sLen = str.length

        for (let i = 0; i < sLen; i++) {//通过放大数的差距来避免loop，很精妙
            const charCode = str.charCodeAt(i);
            key += charCode ** 4;
        }
        if (ht.hasOwnProperty(key)) ht[key].push(str)
        else {
            const anas = [str];
            ht[key] = anas;
            ret.push(ans);
        }
    }
    return ret
}

var groupAnagrams = function (strs) {
    let hm = {}, ret = []

    for (let str of strs) {
        let key = 0
        for (let cha of str) key += cha.charCodeAt(0) ** 4

        if (hm.hasOwnProperty(key)) hm[key].push(str)
        else {
            const arr_Of_Ana = [str]
            hm[key] = arr_Of_Ana
            ret.push(arr_Of_Ana)
        }
    }
    return ret
};