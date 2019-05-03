var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;

    if (l1.val > l2.val) [l1, l2] = [l2, l1]

    l1.next = mergeTwoLists(l1.next, l2);

    return l1;
};

var mergeTwoLists = function (l1, l2) {
    let node = head = new ListNode()
    if (!l2) return l1 
    
    while (l1) {
        if (l1.val > l2.val) [l1, l2] = [l2, l1]
        node.next = l1
        l1 = l1.next
        node = node.next
    }

    node.next = l2
    return head.next

};