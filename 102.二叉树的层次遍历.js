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
    const noNullPush = node => node && queue.push(node);
    noNullPush(root);
    while (queue.length) {
        const lv_len = queue.length;
        ret[lv] = [];
        for (let index = 0; index < lv_len; index++) {
            const node = queue.shift();
            ret[lv].push(node.val);
            noNullPush(node.left);
            noNullPush(node.right);
        }
        lv++;
    }

    return ret;
};
