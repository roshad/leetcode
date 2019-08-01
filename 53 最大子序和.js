var maxSubArray = function(nums) {
    let cur=nums[0],max=cur
    for(let i=1;i<nums.length;i++){
        cur= Math.max(cur+nums[i],nums[i])        
        if (cur>max)max=cur
    }
    return max
};