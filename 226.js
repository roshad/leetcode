function invertTree(root) {
    if (!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

var invertTree = function(root) {//整棵树翻转，相当于每个节点的左右子树都交换
    
    
    let queue=[];
    if (root) queue.push(root);
    while (queue.length){
        
        const curnode= queue.pop()
        console.log(queue);
        if (curnode.left) queue.push(curnode.left);
        if (curnode.right) queue.push(curnode.right);
        [curnode.left,curnode.right]= [curnode.right,curnode.left]   
       
    }

    return root
};