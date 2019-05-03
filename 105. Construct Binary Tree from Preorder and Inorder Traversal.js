let buildTree = function (preorder, inorder) {
    function helper(p, i) {
        if (!p.length || !i.length) return null;
        let val = p[0];
        let pos = i.indexOf(val);//the root position, and also the number of left nodes
        let root = new TreeNode(val);
        root.left = helper(p.slice(1, 1 + pos), i.slice(0, pos));
        root.right = helper(p.slice(1 + pos), i.slice(1 + pos));
        return root;
    }
    return helper(preorder, inorder);
};

var buildTree = function(preorder, inorder) {
    let p_ind=i_ind=0
    function build(stop){
        if (inorder[i_ind]!=stop){
            let root = new TreeNode(preorder[p_ind++])
            root.left = build(root.val)
            i_ind++
            root.right=build(stop)
            return root
        }
        return null
    }
    return build()
};