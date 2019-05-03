function search(nums, target) {
    let i_l = 0, i_r = nums.length - 1;
    while (i_l < i_r) {
        let mid = Math.floor((i_l + i_r) / 2);

        if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^//nums[0]>说明在右
            (target <= nums[mid])) i_r = mid;
        else i_l = mid + 1;
    }

    return i_l == i_r && nums[i_l] == target ? i_l : -1;
}