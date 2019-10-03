var addTwoNumbers = function(l1, l2) {
    const root = new ListNode();
    let pointer = root,
        carryNSum = 0;
    while (l1 || l2 || carryNSum) {
        if (l1) {
            carryNSum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carryNSum += l2.val;
            l2 = l2.next;
        }
        pointer = pointer.next = new ListNode(carryNSum % 10);
        carryNSum = carryNSum > 9 ? 1 : 0;
    }
    return root.next;
};
