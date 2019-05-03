//  time n space n 60ms
var intersect = function(nums1, nums2) {
    var dic = {},r=[]
    for (const num of nums1) dic[num]=(dic[num]+1) ||1 
    //console.log(dic)
    for (const num of nums2){
        if (--dic[num]>-1)  r.push(num) 
        //console.log(num,nums2[num],dic,r)
    }
    return r
};