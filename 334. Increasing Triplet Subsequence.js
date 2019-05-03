var increasingTriplet = function(nums) {
    let n1 = n2 = Number.MAX_SAFE_INTEGER
    for (const num of nums){
        if (num<=n1) n1=num*1
        else if (num<=n2) n2=num*1
        else return true
    }
    return false
};