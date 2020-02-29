var levelOrder = function(root) {
    const ret = [];
    function traverse(node, level) {
        if (!node) return;
        if (!ret[level]) ret[lv] = [];

        ret[level] = [val];
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    traverse(root, 0);
    return ret;
};
var levelOrder = function(root) {
    const ret = [],
        queue = [];
    let lv = 0;
    const pushNode2Q = node => node && queue.push(node);
    pushNode2Q(root);
    while (queue.length) {
        const lv_len = queue.length;
        ret[lv] = [];
        for (let index = 0; index < lv_len; index++) {
            const node = queue.shift();
            ret[lv].push(node.val);
            pushNode2Q(node.left);
            pushNode2Q(node.right);
        }
        lv++;
    }

    return ret;
};
var levelOrder = function(root) {
    const ret= []
    let curLvNodes=[root],curLvRet=[],nextLvNodes=[]
    while (curLvNodes.length){
        const curNode =curLvNodes.shift()
        if (curNode){
            curLvRet.push(curNode.val)
            nextLvNodes.push(curNode.left,curNode.right)
        }       
        if (!curLvNodes.length){
            if (curLvRet.length) ret.push(curLvRet)            
            curLvNodes=nextLvNodes
            nextLvNodes=[]
            curLvRet=[]
        }
    }
    return ret
};