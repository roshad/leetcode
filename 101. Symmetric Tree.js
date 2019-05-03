var isSymmetric = function(nodeL,nodeR=nodeL) {
    
    if (!nodeL&&!nodeR) return true
    if (!nodeL||!nodeR) return false
    
    return (
        nodeL.val == nodeR.val &&
        isSymmetric(nodeL.right,nodeR.left)&&
        isSymmetric(nodeL.left,nodeR.right)
    )
};