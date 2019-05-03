var oddEvenList = function(head) {
    let odd = head,eve = head.next,tem
    if (!head) return head //null.next不能读
    while (odd.next && odd.next.next){
        tem=odd.next
        odd.next=odd.next.next
        odd=odd.next
        tem.next=odd.next
    }
    odd.next=eve
    return head
};