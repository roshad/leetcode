var kthSmallest = function(node, k) {
    let stack=[],count=0
    
    while (true){
        if (node) {
            stack.push(node)
            node=node.left
        } else {
            node= stack.pop()
            count++
            if (count==k)return node.val

            node=node.right
        }
    }
};