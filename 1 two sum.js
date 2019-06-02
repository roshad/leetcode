//首解 On
var twoSum = function (nums, target) {
    let r = []
    let found = false
    nums.forEach((v, i) => {

        if (found == true) return
        else {
            nums.forEach((v1, i1) => {
                if (i1 == i || found == true) return
                else if (v1 + v == target) { r = [i, i1]; console.log(r); found = true; }
            })
        }
    })
    return r
};

2
var twoSum = function (nums, target) {
    const hash = {};
    for (const [i,v] of nums.entries()) {
        if (v in hash) return [hash[v], i];
        hash[target - v] = i;
    }
};
