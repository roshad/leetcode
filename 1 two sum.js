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

//抄来的
var twoSum = function (nums, target) {
    const hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in hash) return [hash[nums[i]], i];
        hash[target - nums[i]] = i;
    }

};

//自己再做
var twoSum = function (nums, target) {
    let a = {}//有负值故而不能用array
    for (const [i, v] of nums.entries()) {
        const wanted = target - v

        if (a[wanted] != undefined) return [a[wanted], i]
        a[v] = i//用v作key让后数找

    }
};