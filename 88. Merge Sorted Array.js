var merge = function(nums1, len1, nums2, len2) {
    let i1 = len1 - 1,
        i2 = len2 - 1,
        i_merge = len1 + len2 - 1;

    while (i_merge != -1) {
        if (nums1[i1] <= nums2[i2] || i1 == -1) nums1[i_merge--] = nums2[i2--];
        else nums1[i_merge--] = nums1[i1--];
    }
};


var fizzBuzz = function(n) {
    let ret=[]
    for (let i=1;i<=n;i++){
        const fb= (n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : "")
        ret.push(fb?fb:i+'')
    }
    return ret
};