var merge = function(nums1, m, nums2, n) {
    for (let iM = m + n - 1, i1 = m - 1, i2 = n - 1; iM > -1; )
        nums1[iM--] =
            nums1[i1] > nums2[i2] || i2 < 0 ? nums1[i1--] : nums2[i2--];
};
