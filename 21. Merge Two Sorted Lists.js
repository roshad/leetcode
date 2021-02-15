//空间复杂，短
//整个func把两个依序排
//每步拿出最小的连上 之后依序排好的，然后return
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    if (l1.val > l2.val) [l1, l2] = [l2, l1];
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
};
//
var mergeTwoLists = function(l1, l2) {
    if (!l2)return l1
    const head=new ListNode();
    let pointer=head
    while (l1){
        if (l1.val>l2.val) [l1,l2]=[l2,l1]
        pointer=pointer.next=l1
        l1=l1.next
    }
    pointer.next=l2
    return head.next
};