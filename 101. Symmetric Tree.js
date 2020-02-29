var isSymmetric = function(Lnode, Rnode = Lnode) {
    if (Lnode == null && Rnode == null) return true;

    if (Lnode == null || Rnode == null) return false;
    return (
        Lnode.val == Rnode.val &&
        isSymmetric(Lnode.left, Rnode.right) &&
        isSymmetric(Lnode.right, Rnode.left)
    );
};

var isSymmetric = function(root) {
    if (!root) return true
    const arr = [root.left,root.right]
    while (arr.length){
        const n1=arr.shift(),n2=arr.shift()
        if (!n1 &&!n2)continue
        if (!(n1&&n2) && (n1||n2)) return false        
        if (n1.val !=n2.val)return false
        arr.push(n1.left,n2.right,n1.right,n2.left)        
    }
    return true
};