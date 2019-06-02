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
function moveZeroes(nums){
    let no0_i=0;
    for (let tra_i=0;tra_i<nums.length;tra_i++){
        if(tra_i!=0){
            nums[no0_i]=nums[tra_i]
            no0_i++
        }
    }
    for (;no0_i<nums.length;no0_i++) nums[no0_i]=0
}