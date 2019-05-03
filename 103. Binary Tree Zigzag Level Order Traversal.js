var zigzagLevelOrder = function (root) {
    let cur_lv = [root], tr = true, result = []

    if (!root) return result

    while (cur_lv.length) {
        let vals = [], nex_lv = []

        cur_lv.forEach(node => {
            vals.push(node.val)

            if (node.left) nex_lv.push(node.left)
            if (node.right) nex_lv.push(node.right)
        })

        if (!tr) vals.reverse()
        tr = !tr
        result.push(vals)

        cur_lv = nex_lv
    }
    return result

};

var zigzagLevelOrder = function (root) {
    let res = [];

    var helper = function (node, level, res) {
        if (!node) return;
        if (!res[level]) res[level] = [];
        level % 2 ? res[level].unshift(node.val) : res[level].push(node.val);
        helper(node.left, level + 1, res);
        helper(node.right, level + 1, res);
    }

    helper(root, 0, res);

    return res;
};

