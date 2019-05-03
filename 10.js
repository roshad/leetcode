//错误的顺序loop
function isMatch(text, pattern) {
    let indT = 0
    for (let indP=0;indP<pattern.length;indP++ ) {
        const curSymbol = pattern[indP]
        //const curChar = text[indT] 需要算出，否则错误
        console.log(indT,indP)
        if (pattern[indP+1]=="*"){
            
            while (curSymbol == text[indT]) indT++
            
            if (curSymbol==".") indT=text.length
            indP++
        } else if (curSymbol==text[indT]||(curSymbol==".")) {indT++}//单个
        else return false//text字符与pattern字符不等
    }
    
    if (indT!=text.length) return false //pattern未及
    return true
}

function isMatch(text, pattern){
    //console.log(text,pattern)
    

    if (!pattern) return !text//结束

    let cur_match = !!text &&  [text[0], '.'].includes(pattern[0])//当前位

    if (pattern.length >= 2 && pattern[1] == '*'){
        return (
            isMatch(text, pattern.slice(2)) ||//跳过当前pattern，不需要当前位match
            cur_match && isMatch(text.slice(1), pattern)
        )
    } else return cur_match && isMatch(text.slice(1), pattern.slice(1))
}

//改成DP
function isMatch(text, pattern){
    //console.log(text,pattern)
    let mem = {}
    //用array会因1D未设定而不能设定2D
    function calc(indT,indP){
        console.log(indT,indP)
        let result;
        if (!mem[indT+","+indP]) {
            if (indT=patter.length) result= !text[indP]//结束
            else{
                let cur_match = !!text &&  [text[indT], '.'].includes(pattern[indP])//当前位
        
                if (pattern.length-indP >= 2 && pattern[indP+1] == '*'){
                    result= (
                        calc(indT, indP+2) ||//跳过当前pattern，不需要当前位match
                        cur_match && calc(indT+1, indP)
                    )
                } else result= cur_match && calc(indT+1, indP+1)
            }
            mem[indT+","+indP] = result
        } else result = mem[indT+","+indP]
        
        return result
    }
    
    calc(0,0)
    //console.log(mem)
    return mem["0,0"]
}