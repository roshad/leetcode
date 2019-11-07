var longestPalindrome = function(s) {
    let pS="$#"
    for (const cha of s) ps+=cha+"#"
    pS+="^"
    let rB=0,cen=0,rads=[],maxRad=0,maxCen=0
    for (let cur_cen=2;cur_cen<pS.length-2;){
        let rad=Math.min(rads[cen*2-cur_cen],Math.max(0,rB-cur_cen))
        while (pS[cur_cen+rad+1]==pS[cur_cen-rad-1])rad++
        if (rad>maxRad){
            maxRad=rad
            maxCen=cur_cen
        }
        if (rad+cur_cen>rB){
            rB=rad+cur_cen
            cen=cur_cen
        }
    }
    
};