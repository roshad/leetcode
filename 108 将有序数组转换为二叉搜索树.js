function sortedArrayToBST(nums, sta = 0, end = nums.length - 1) {
    if (sta > end) return null;

    const mid = Math.floor((sta + end) / 2),
        midNode = new TreeNode(nums[mid]);
    midNode.left = sortedArrayToBST(nums, sta, mid - 1);
    midNode.right = sortedArrayToBST(nums, mid + 1, end);
    return midNode;
}
