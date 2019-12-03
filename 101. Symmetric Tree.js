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
    const container=[]
    container.push(root,root)
    while (container.length){
        const n1=container.pop(),
        n2=container.pop()
        if (!n1&&!n2)continue
        else if (!n1||!n2)return false
        else if (n1.val!=n2.val)return false
        container.push(n1.left,n2.right,n1.right,n2.left)        
    }
    return true
};