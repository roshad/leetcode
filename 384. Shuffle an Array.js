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
//错解 第一次取不可能取到最后一个 无法通过第六测
Solution.prototype.shuffle = function() {
    this.cur=this.ori.slice() 
    const len=this.cur.length
    for (let i=0;i<len;i++){
        const pick=i+Math.floor(Math.random()*(len-i-1));
        [this.cur[i],this.cur[pick]]=[this.cur[pick],this.cur[i]]
    }
    return this.cur
};