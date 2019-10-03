var merge = function(nums1, m, nums2, n) {
    let iM = m + n - 1,
        i1 = m - 1,
        i2 = n - 1;
    while (iM > -1) {
        if (nums1[i1] > nums2[i2] || i2 < 0) nums1[iM--] = nums1[i1--];
        else nums1[iM--] = nums2[i2--];
    }
};
