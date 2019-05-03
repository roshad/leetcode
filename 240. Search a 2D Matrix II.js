var searchMatrix = function(matrix, target) {
    while (matrix.length){
        if (matrix[0][0]>target) return false
        for (let i=0;i<matrix[0].length;i++){
            if (matrix[0][i]>target)break
            if (matrix[0][i]==target)return true
        }
        matrix.shift()
    }
    return false
}