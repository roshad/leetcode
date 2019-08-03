var Solution = function(nums) {
    this.ori = nums;
};

Solution.prototype.reset = function() {
    return this.ori;
};
// n*n
Solution.prototype.shuffle = function() {
    const cop = this.ori.slice(),
        ret = [];
    while (cop.length) {
        ret.push(cop.splice(Math.floor(Math.random() * cop.length), 1));
    }
    return ret;
};
// n
Solution.prototype.shuffle = function() {
    const len = this.ori.length,
        nums = this.ori.slice()
    let picked;
    for (let i = 0; i < len - 1; i++) {
        picked = Math.floor(Math.random() * (len - i)) + i;
        [nums[i], nums[picked]] = [nums[picked], nums[i]];
    }
    return nums;
};
