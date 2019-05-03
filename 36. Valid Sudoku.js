//3个for要合并，就需要3个set
var isValidSudoku = function(board) {
    let rep,num
    
    
    for (i=0; i<9; i++) {
        // rows
        rep = new Set();
        for (var j=0; j<9; j++) {
            num = board[i][j]

            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }
        // cols
        rep = new Set();
        for (var j=0; j<9; j++) {
            num = board[j][i];

            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }
        //sqrs
        let x,y
        rep = new Set();
        for (var j=0; j<9; j++) {
            x = 3 * (i%3) + j%3;
            y = 3 * Math.floor(i/3) + Math.floor(j/3);
            num = board[y][x];

            if (num != "." && rep.has(num)) return false;
            rep.add(num);
        }
    }
    
    return true;
};