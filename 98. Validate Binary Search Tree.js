var isValidBST = function(node,upper,lower) {
    if (!node) return true
    if (node.val<=lower||node.val>=upper) return false
    return isValidBST(node.left,node.val,lower)&&isValidBST(node.right,upper,node.val)
}