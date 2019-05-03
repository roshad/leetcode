var isPalindrome = function (head) {
    let forward_str = backward_str = ""
    while (head) {
        forward_str += head.val
        backward_str = head.val + backward_str
        head = head.next
    }
    return forward_str == backward_str
};

var isPalindrome = function(head) {
    let slow = fast = head
    //使slow在过中的位置上
        while (fast && fast.next){//fast避免双数时跳超读null.next
            fast=fast.next.next
            slow = slow.next
        }    
        if (fast) slow=slow.next//1.使在中右的位置上 2.特殊状况：ll为空时避免读null.next
    
    let prev,next
    while (slow){
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next        
    }
    
    let sta = head,end = prev
    //console.log(sta,end)
    while (end){//特殊状况 ：避免ll仅有一个时进入
        if (sta.val!=end.val) return false
        sta=sta.next;end=end.next
    }
    return true
};