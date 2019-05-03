
var removeDuplicates = function(nums) {
    let i_sort = 1;
    for (let i_loop=1; i_loop<nums.length; i_loop++) {
        if (nums[i_loop-1] !== nums[i_loop]) {
            nums[i_sort] = nums[i_loop];
            i_sort++;
        }
    }

    return i_sort;
};