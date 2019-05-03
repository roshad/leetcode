function subsets(nums) {
    const res = [[]]
  
    for (let num of nums){
        let len = res.length
        
        for (let i=0;i<len;i++){
            let cur_set = res[i].slice()
            cur_set.push(num)
            res.push(cur_set)
        }
    }
    return res;
  };