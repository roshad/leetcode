//1
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    let aa = {}, aa1 = {}
    for (let cha of s) aa[cha] = aa[cha] + 1 || 1
    for (let cha of t) aa1[cha] = aa1[cha] + 1 || 1

    for (let cha in aa) if (aa1[cha] !== aa[cha]) return false

    return true
}
//2
var isAnagram = function (s, t) {
    if (s.length!=t.length) return false
    const kv = {}
    for (let cha of s) kv[cha]=kv[cha]+1||1
    for (let cha of t) 
        if (!(--kv[cha]>=0)) return false//!应对后有前无cha
    return true 
}