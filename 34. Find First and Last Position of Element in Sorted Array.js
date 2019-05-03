
var searchRange = function(nums, target) {
    let ind_l = 0,ind_r=nums.length-1,ind_m,tar_l
    
    while (ind_l<ind_r){
        ind_m= Math.floor((ind_l+ind_r)/2)
        if (nums[ind_m]>=target) ind_r = ind_m
        else ind_l = ind_m+1
    }
    tar_l= ind_l
    
    if (nums[ind_l]!=target) return [-1,-1]

    ind_r=nums.length-1
    
    while (ind_l<ind_r){
        ind_m= Math.ceil((ind_l+ind_r)/2)
        if (nums[ind_m]==target) ind_l = ind_m
        else ind_r = ind_m-1
    }
    
    return [tar_l,ind_r]
};