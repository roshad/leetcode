//我这个更快,n/2
var isPalindrome = function(x) {
    x+=""
    let 
        left = Math.floor((x.length-1)/2),
        right = Math.floor(x.length/2)
    while (left>=0){
        if (x[left]!==x[right]) return false;
        left --;right++;
    }
    return true
};

//O(lg(n))
var isPalindrome = function(x) {
    if (x < 0) return false;  
    var xx = x;
    
    var reversed = 0; 
    do {
        var r = x % 10;
        var x = (x - r) / 10;//等同于truncate
        reversed = (reversed * 10) + r;
    } while(x > 0);
    
    return xx == reversed;
};