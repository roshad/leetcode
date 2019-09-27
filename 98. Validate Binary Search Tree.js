var isValidBST = function(
    node,
    low = Number.MIN_SAFE_INTEGER,
    up = Number.MAX_SAFE_INTEGER
) {
    return !node
        ? true
        : node.val > low &&
              node.val < up &&
              isValidBST(node.left, low, node.val) &&
              isValidBST(node.right, node.val, up);
};
