function setZeroes(matrix) {
    let c0=1,ylen=matrix.length,xlen=matrix[0].length
    for (let y in matrix) {
        if (matrix[y][0]==0) c0=0
        for (let x=1;x<xlen;x++) {
            if (matrix[y][x] == 0) matrix[0][x] = matrix[y][0] = 0;
        }
    }
    for (let y=ylen-1;y>-1;y--){        
        for (let x=xlen-1;x>0;x--){
            if (matrix[0][x]==0||matrix[y][0]==0) matrix[y][x]=0    
        }
        if (c0==0)matrix[y][0]=0
    }    
}
