var exist = function (board, word) {
    for (let y in board)
        for (let x in board[0])
            if (board[y][x] == word[0] && check(x * 1, y * 1, 0)) return true
    return false
    function check(x, y, ind) {
        if (x < 0 || x >= board[0].length ||
            y < 0 || y >= board.length ||
            board[y][x] !== word[ind]
        ) return false

        board[y][x] = "#"

        if (
            ind + 1 == word.length ||
            check(x - 1, y, ind + 1) ||
            check(x + 1, y, ind + 1) ||
            check(x, y - 1, ind + 1) ||
            check(x, y + 1, ind + 1)
        ) return true

        board[y][x] = word[ind]
        return false
    }
};
