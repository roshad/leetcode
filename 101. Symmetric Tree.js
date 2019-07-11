var isSymmetric = function(Lnode, Rnode = Lnode) {
    if (Lnode == null && Rnode == null) return true;

    if (Lnode == null || Rnode == null) return false;
    return (
        Lnode.val == Rnode.val &&
        isSymmetric(Lnode.left, Rnode.right) &&
        isSymmetric(Lnode.right, Rnode.left)
    );
};

var isSymmetric = function(Lnode, Rnode = Lnode) {
    let que = [];
    que.unshift(Lnode, Rnode);

    while (que.length) {        
        let n1 = que.shift(),
            n2 = que.shift();
        if (n1 == null && n2 == null) continue;
        if (n1 == null || n2 == null) return false;
        if (!(n1.val == n2.val)) return false;
        que.unshift(n1.left);
        que.unshift(n2.right);
        que.unshift(n1.right);
        que.unshift(n2.left);
    }
    return true
};