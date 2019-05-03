function sortColors (nums) {
    let ind_0 = 0 ,ind_2=nums.length-1

    for (let ind=0;ind<=ind_2;ind++){        
        if (nums[ind]==0) {
            [nums[ind],nums[ind_0]]=[nums[ind_0],nums[ind]]
            ind_0++
        }
        if (nums[ind]==2) {
            [nums[ind],nums[ind_2]]=[nums[ind_2],nums[ind]]
            ind_2--;ind--
        }
    }
};