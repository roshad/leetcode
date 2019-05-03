function RandomizedSet() {
    this.arr = []; this.obj = {}
}

RandomizedSet.prototype.insert = function (val) {
    
    if (this.obj[val]!==undefined) return false;
    this.obj[val] = this.arr.length
    this.arr[this.arr.length] = val
    return true
}

RandomizedSet.prototype.remove = function (val) {
    if (this.obj[val] === undefined) return false;    
        
    [this.arr[this.arr.length - 1], this.arr[this.obj[val]]] = 
    [this.arr[this.obj[val]], this.arr[this.arr.length - 1]];//将需删值换至尾    
    
    this.arr.pop()//删除尾值
    
    this.obj[this.arr[this.obj[val]]] = this.obj[val]//位录 被换值 改为 被删值
    delete this.obj[val]//位录 删除被删值
    
    return true
}

RandomizedSet.prototype.getRandom = function () {    
    return this.arr[Math.floor(Math.random() * this.arr.length)]
}