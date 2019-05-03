var merge = function (nums1, m, nums2, n) {
    for (let i1 = m, i2 = 0; i1 < nums1.length; i1++ , i2++) nums1[i1] = nums2[i2]

    nums1.sort((a, b) => a - b)
};

var merge = function (nums1, m, nums2, n) {
    let
        i1 = m - 1, i2 = n - 1, i_merge = m + n - 1

    //console.log(i1,i2)
    while (i_merge != -1) {
        if (nums1[i1] <= nums2[i2] || i1 == -1) nums1[i_merge--] = nums2[i2--] // 特殊情况：index -1 und      
        else nums1[i_merge--] = nums1[i1--]
        //console.log(nums1)
    }
};