var isAnagram = function(s, t) {
    if (s.length != t.length) return false

    let mem={}
    for (let cha of s) mem[cha] = mem[cha]+1 ||1
    //console.log(mem)
    for (let cha of t){
        mem[cha] -= 1
        //console.log(cha,mem)
        if (!(mem[cha]>-1)) return false
    }

    return true
};

