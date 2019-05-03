var Solution = function(nums) {
    this.initial = nums.slice()
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.initial;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let len = this.nums.length,picked,nums=this.nums
    for (let i;i<this.nums.length;i++){
        picked = Math.floor(Math.random() * (len-i))+i;
        [nums[i],nums[picked]]=[nums[picked],nums[i]]
    }
    return nums
};