//loop，在应在的位置+n，如数<=n，说明没有被操作过，在arr里不存在
// 官解说返回值不计入额外空间，这说法没听过
// arr.entries()key 的type是数
var findDisappearedNumbers = function(nums) {
    const len=nums.length
    for (let num of nums){
        const corInd=(num-1)%len
        nums[corInd]+=len
    }
    let mem_i=0
    for (let loop_i=0;loop_i<len;loop_i++){
        if (nums[loop_i]<=len)nums[mem_i++]=loop_i+1        
    }
    return nums.slice(0,mem_i)
};