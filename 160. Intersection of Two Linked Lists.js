var getIntersectionNode = function(headA, headB) {
    var a=headA, b=headB;
    while(a!=b){
        a = a? a.next : headB
        b = b? b.next : headA
    }
    
    return a; // 
};