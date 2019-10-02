var isValidBST = (
    node,
    lB = Number.MIN_SAFE_INTEGER,
    uB = Number.MAX_SAFE_INTEGER
) =>
    !node
        ? true
        : node.val > lB &&
          node.val < uB &&
          isValidBST(node.right, node.val, uB) &&
          isValidBST(node.left, lB, node.val);
