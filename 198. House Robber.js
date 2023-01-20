// 
var rob = function(nums) {
    const len=nums.length
    for (let i=2;i<len;i++)
        nums[i]+=Math.max(nums[i-2],nums[i-3]||0)
    
    return Math.max(nums[len-1]||0,nums[len-2]||0)//只有一个数的情况
};