//1
var moveZeroes = function (nums) {
    let first_zero_I = 0
    function next_zero() {
        while (nums[first_zero_I] != 0) {
            first_zero_I++
            //console.log(first_zero_I)
            if (first_zero_I >=nums.length) return
        }
        next_non_zero()
    }
    let next_non_zero_I
    function next_non_zero() {
        next_non_zero_I = first_zero_I
        while (nums[next_non_zero_I] == 0) {
            next_non_zero_I++
            //console.log(next_non_zero_I)
            if (next_non_zero_I >=nums.length) return
        }
        [nums[next_non_zero_I], nums[first_zero_I]] = [nums[first_zero_I], nums[next_non_zero_I]]
        //console.log(nums)
        next_zero()
    }
    next_zero()
    //console.log(nums)
};
//2
var moveZeroes = function(nums) {
    let n = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[n] = nums[i];
            n++;
        }
    }
    for(let i = n; i < nums.length; i++){
        nums[i] = 0;
    }
};