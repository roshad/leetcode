var generateParenthesis = function(n) {
    let res = []
    function gen(ln,rn,str){
        if (rn<ln) return 
        if (!ln&&!rn) res.push(str)
        if (ln) gen(ln-1,rn,str+"(")
        if(rn) gen(ln,rn-1,str+")")
    }
    gen(n,n,"")
    return res
};