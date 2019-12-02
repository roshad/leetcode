function rotate(nums, k) {
    let
        i_sta = -1,
        len = nums.length,
        count = 0
    k %= len
    while (count != len) {
        i_sta++
        let
            i_cur = i_sta,
            holder = nums[i_cur]
        do {
            let i_nex = (i_cur + k) % len;
            [holder, nums[i_nex]] = [nums[i_nex], holder]
            i_cur = i_nex
            count++
        } while (i_cur != i_sta)
    }
}
3.1
function rotate(nums, k) {
    k %= nums.length
    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length - 1)

    function reverse(sta, end) {
        while (sta < end) {
            [nums[sta], nums[end]] = [nums[end], nums[sta]]
            sta++; end--
        }
    }
}
3.2
var rotate = (nums, k)=> nums.unshift(...nums.splice(nums.length-k))

