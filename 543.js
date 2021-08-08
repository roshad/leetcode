//不管怎么走，都是左支与右支;
//每个节点都有可能是最大
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  (function getMaxDepth(node) {
    if (!node) return 0;
    const l = getMaxDepth(node.left),
      r = getMaxDepth(node.right);
    maxDiameter = Math.max(l + r + 1, maxDiameter);
    //console.log(node,l,r)
    return Math.max(l, r) + 1;
  })(root)
  
  return maxDiameter - 1;
};
