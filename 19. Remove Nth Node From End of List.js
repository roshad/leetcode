//1
var removeNthFromEnd = function (head, n) {
    let reader = head, len = 0
    while (reader) {
        len++
        reader = reader.next
    }
    
    let mem_head = new ListNode()
    mem_head.next = head
    reader = mem_head

    let steps = len - n
    while (steps--) reader = reader.next

    reader.next = reader.next.next
    return mem_head.next
};
//2 
var removeNthFromEnd = function (head, n) {    
    let p_r=head
    while (n){
        p_r=p_r.next
        n--
    }
    if (!p_r) return head.next
    let p_l=head
    while (p_r.next){
        p_l=p_l.next
        p_r=p_r.next
    }
    p_l.next=p_l.next.next
    return head
}
