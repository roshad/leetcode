function lengthOfLIS(nums) {
    function bs(tar){
        let l=0,r=nums.length-1,mid
        while (l<r){
            mid = l+r>>1
            if (mem[mid]<tar) l=mid+1
            else r=mid
        }
        return l
    }
    if (!nums.length) return 0
    let mem = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mem[mem.length - 1]) mem.push(nums[i])
        else mem[bs(nums[i])] = nums[i]
    }
    return mem.length
}