var removeDuplicates = function(nums) {
    for (let iT = iD=1; iT < nums.length; iT++) {//t= traverse d = distinct
        if (nums[iT]!==nums[iT-1]){
            nums[iD]= nums[iT]
            iD++
        }       
    }
    return iD
}