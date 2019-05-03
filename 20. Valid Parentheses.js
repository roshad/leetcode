var isValid = function(s) {
    let 
        map ={"(":")","[":"]","{": "}"},
        stack =[]
    
    for (let par of s){
        if (map[par]) stack.push(map[par])
        else if (par !==stack.pop()) return false
    }
    return stack.length==0
};