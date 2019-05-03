var addTwoNumbers = function (l1, l2) {
    let head = cur = new ListNode(), sum = 0

    while (l1 || l2 || sum) {
        cur = cur.next = new ListNode()
        if (l1) { sum += l1.val; l1 = l1.next }
        if (l2) { sum += l2.val; l2 = l2.next }
        cur.val = sum % 10
        sum = sum > 9 ? 1 : 0
    }
    return head.next
};