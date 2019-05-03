function numIslands(grid) {
    function judge_n_sink(y, x) {
        if (y < 0 || y == grid.length || x < 0 || x == grid[y].length|| grid[y][x]=="0") return 0
        grid[y][x]="0"
        
        judge_n_sink(y+1,x);judge_n_sink(y,x+1);judge_n_sink(y,x-1);judge_n_sink(y-1,x)
        
        return 1
    }
    
    let count = 0;
    for (let y = 0; y < grid.length; y++)
        for (let x = 0; x < grid[y].length; x++){
            count += judge_n_sink(y, x);
        }
            
    return count;
}