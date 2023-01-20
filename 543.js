
//每个节点都有可能是最大
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  (function maxJumpFromDeepestToParent(node) {//maxDepth不够易懂。仅算子到本的深度的话，需要判定是否为空。
    if (!node) return 0;
    const l = maxJumpFromDeepestToParent(node.left),
      r = maxJumpFromDeepestToParent(node.right);
    maxDiameter = Math.max(l + r, maxDiameter);
    //console.log(node,l,r)
    return Math.max(l, r) + 1;//
  })(root)
  
  return maxDiameter;
};
(function maxJumpFromDeepestToCurrent(node) {//maxDepth不够易懂。仅算子到本的深度的话，Math.max需要避免空，更麻烦
  if (!node) return NaN;
  const l = maxJumpFromDeepestToCurrent(node.left),
    r = maxJumpFromDeepestToCurrent(node.right);
    
  maxDiameter = Math.max(((l+1)||0) + ((r+1)||0), maxDiameter);
 
  return Math.max(((l+1)||0) , ((r+1)||0))
})(root)