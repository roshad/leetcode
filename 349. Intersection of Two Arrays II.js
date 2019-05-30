//  time n space n 60ms
var intersect = function(nums1, nums2) {
    var aa = {},r=[]
    for (const num of nums1) aa[num]=(aa[num]+1) ||1     
    for (const num of nums2)
        if (--aa[num]>-1)  r.push(num)         
    
    return r
};