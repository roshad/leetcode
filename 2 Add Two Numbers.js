var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(),cur=head, sum = 0
    while (l1 || l2 || sum) {        
        if (l1) { sum += l1.val; l1 = l1.next }
        if (l2) { sum += l2.val; l2 = l2.next }
        cur = cur.next = new ListNode(sum % 10)
        sum = sum > 9 ? 1 : 0
    }
    return head.next
};