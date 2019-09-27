var sortedArrayToBST = function(nums, sta = 0, end = nums.length - 1) {
    if (sta > end) return null;
    const mid = Math.floor((sta + end) / 2),
        node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums, sta, mid - 1);
    node.right = sortedArrayToBST(nums, mid + 1, end);
    return node;
};
