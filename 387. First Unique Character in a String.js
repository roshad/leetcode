//1
var firstUniqChar = function (s) {
    const aa = {}

    for (let cha of s) {

        aa[cha] = aa[cha] + 1 || 1
    }

    for (let cha in aa) {
        if (aa[cha] == 1) return s.indexOf(cha)
    }
    return -1
}
//2
var firstUniqChar = function (s) {
    for (let cha of s){
        const fInd = s.indexOf(cha) 
        if (fInd== s.lastIndexOf(cha)) return fInd
    }
    return -1;
}