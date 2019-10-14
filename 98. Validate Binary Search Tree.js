var isValidBST = (
    node,
    lB = -Infinity,
    uB = Infinity
) =>
    !node
        ? true
        : node.val > lB &&
          node.val < uB &&
          isValidBST(node.right, node.val, uB) &&
          isValidBST(node.left, lB, node.val);
