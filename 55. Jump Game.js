function canJump(nums) {
    let ind_las = nums.length-1
    for (let ind_loo=ind_las;ind_loo>=0;ind_loo--)
        if (ind_loo+nums[ind_loo]>=ind_las) ind_las=ind_loo
    return ind_las==0
}