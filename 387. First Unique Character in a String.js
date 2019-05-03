var firstUniqChar = function(s) {
    mem = {}
    for (let i in s) {
        let cha = s[i]
        if (!mem[cha]) {
            mem[cha]={}
            mem[cha]["first"] = i*1
        }
        mem[cha]["amount"]= mem[cha]["amount"]+1 || 1
    }
    //console.log(mem)
    
    for (let cha in mem) {
        //console.log(k,v)
        if (mem[cha]["amount"]==1) return mem[cha]["first"]
        
    }
    return -1
};


var firstUniqChar = function (s) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let firstUniq = s.length

    for (let i = 0; i < letters.length; i++) {
        const char = letters[i],
            first = s.indexOf(char)
        if (
            first !== -1 &&//exist 
            s.lastIndexOf(char) === first && //unique
            firstUniq > first // first
        ) { firstUniq = first }
    }
    
    return firstUniq === s.length ? -1 : firstUniq
};