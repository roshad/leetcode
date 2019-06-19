var intersection = function(nums1, nums2) {
    var set = new Set(nums1),
        ret = new Set();

    for (const num of nums2) if (set.has(num)) ret.add(num);

    return Array.from(ret);
};

var intersection = function(nums1, nums2) {
    const aa1 = {},
        ret = [];
    nums1.forEach(num => (aa1[num] = 1));

    for (let num of nums2)
        if (aa1[num] == 1) {
            ret.push(num);
            aa1[num]++;
        }

    return ret
};
