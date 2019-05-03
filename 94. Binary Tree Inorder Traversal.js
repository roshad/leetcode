var inorderTraversal = function (root) {
    let result = []
    function traversal(root) {
        if (root) {
            if (root.left) traversal(root.left)
            result.push(root.val)
            if (root.right) traversal(root.right)
        }
    }
    traversal(root)
    return result
};

var inorderTraversal = function (root) {
    let result = [], stack = [], curNode = root

    while (curNode || stack.length) {
        while (curNode) {
            stack.push(curNode)
            curNode = curNode.left
        }
        curNode = stack.pop()
        result.push(curNode.val)
        curNode = curNode.right

    }
    return result

};