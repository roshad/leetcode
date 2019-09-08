//3个for要合并，就需要3个set
var isValidSudoku = function(board) {
    let rep, num;
    for (i = 0; i < 9; i++) {
        rep = new Set();
        for (var j = 0; j < 9; j++) {
            num = board[i][j];
            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }
        rep = new Set();
        for (var j = 0; j < 9; j++) {
            num = board[j][i];
            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }

        let x, y;
        rep = new Set();
        for (var j = 0; j < 9; j++) {
            x = 3 * (i % 3) + (j % 3);
            y = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            num = board[y][x];

            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }
    }

    return true;
};

var isValidSudoku = function(board) {
    function tra(cb) {
        for (let i1 in board) {
            const set = new Set();
            for (let i2 in board) {
                const cur = cb(i1, i2);
                if (cur != "." && set.has(cur)) return false;
                else set.add(cur);
            }
        }
        return true;
    }

    return (
        tra((i1, i2) => board[i1][i2]) &&
        tra((i1, i2) => board[i2][i1]) &&
        tra(
            (i1, i2) =>
                board[3 * Math.floor(i1 / 3) + Math.floor(i2 / 3)][
                    3 * (i1 % 3) + (i2 % 3)
                ]
        )
    );
};
