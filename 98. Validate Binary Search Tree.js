var isValidBST = function(node,ub,lb) {
    if (!node) return true
    
    if (node.val>=ub||node.val<=lb) return false
    
    return isValidBST(node.left,node.val,lb)&&isValidBST(node.right,ub,node.val)
};