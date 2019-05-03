var merge = function(intervals) {
    let obj = {}
    for (let int of intervals){        
        if (obj[int.start]===undefined|| 
            obj[int.start]<int.end)
            obj[int.start] = int.end
    }
    
    let res=[]
    for (let sta in obj){
        let last = res[res.length-1]
        if (!last || sta >last.end) res.push(new Interval(sta,obj[sta]))
        else last.end = Math.max(last.end,obj[sta])
    }
    return res
};