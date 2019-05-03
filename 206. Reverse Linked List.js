var reverseList = function(head) {
    let cur=head,pre,nex

    while (cur){
        nex = cur.next
        cur.next = pre
        pre = cur
        cur = nex
    }
    return cur
};