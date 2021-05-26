// 1转为set n
// tra 2 n，
// has n
// 就加入set2，
// ret arr set2 n

var intersection = function(nums1, nums2) {
    var set = new Set(nums1),
        ret = new Set();

    for (const num of nums2) if (set.has(num)) ret.add(num);

    return Array.from(ret);
};
//排序+双指针优势在空间
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
