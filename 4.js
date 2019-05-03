//log(m+n)直接就可以想到binary search

// 错误的解法，因sort复杂度为n*log(n)
    var findMedianSortedArrays = function (nums1, nums2) {
        let r = nums1.concat(nums2).sort((a, b) => a - b)

        let len = r.length

        if (len % 2 == 0) return (r[len / 2] + r[len / 2 - 1]) / 2
        else return r[Math.floor(len / 2)]
    };

/* 
去掉非中位数，分别读两arr 需除数（d）的一半位
    因（此消彼长，必有一边>=d/2个）
    
不能用slice，复杂度为n
*/
    var findMedianSortedArrays = function (nums1, nums2) {

        let len = nums1.length + nums2.length
        if (nums1.length > nums2.length) {
            let tem = nums1; nums1 = nums2; nums2 = tem
        }

        let
            total_remove = Math.round(len / 2) - 1,
            cur_remove = Math.round(total_remove / 2),
            removed = 0,
            s1 = 0, s2 = 0 //s = start
        
        while (removed < total_remove) {
            if (nums1[s1+cur_remove - 1] < nums2[s2+cur_remove - 1]) s1 +=cur_remove
            else s2 += cur_remove
            removed += cur_remove

            cur_remove = Math.floor(cur_remove / 2) == 0 ? 1 : Math.floor(cur_remove / 2)//有连续两个1的
        }

        function pickSmall() {
            if (nums1[s1] == undefined) return nums2[s2++]
            if (nums2[s2] == undefined) return nums1[s1++]
            if (nums1[s1] < nums2[s2])  return nums1[s1++]
            else return nums2[s2++]
        }
        //单取1，双取2
        return len % 2 == 0 ? (pickSmall() + pickSmall()) / 2 : pickSmall()
    };

/*
两arr各分两半，左长=右长，只需要找短arr的分割点。 故是lb(min(nums1,nums2))

两arr各分成两半，使  ，左max<=右max
    想成一列数，很容易明白
*/
    var findMedianSortedArrays = function (a1, a2) {
        if (a1.length > a2.length) [a1, a2] = [a2, a1]

        const
            len_both = a1.length + a2.length,
            len_left = Math.floor((len_both + 1) / 2)
        let
            half = Math.round(a1.length / 2),
            s1 = Math.round(a1.length / 2), // slice position
            s2 = len_left - s1,
            lm, rm;

        function calcMM(s1, s2) {
            //特殊情况：有一边为空
            lm = //取max时，0导致s-1不存在
                s1 == 0 ? a2[s2 - 1] :
                s2 == 0 ? a1[s1 - 1] :
                Math.max(a1[s1 - 1], a2[s2 - 1])
            rm = //取min时，length导致a[s]不存在
                s1 == a1.length ? a2[s2] :
                s2 == a2.length ? a1[s1] :
                Math.min(a1[s1], a2[s2])
            return [lm, rm]
        }
        [lm, rm] = calcMM(s1, s2)
        //console.log(s1,s2,lm,rm)
        while (lm > rm) {
            half = Math.round(half / 2)

            s1 +=
                s2 - 1 == -1 ? -half : //特例：需移动时，2不含左
                a1[s1 - 1] > a2[s2 - 1] ? -half : half

            s2 = len_left - s1;

            [lm, rm] = calcMM(s1, s2);
            //console.log(s1, s2, lm, rm)
        }
        
        if (len_both % 2 == 0) return (lm + rm) / 2
        return lm
    };
