var hasCycle = function (head) {
    let nodesSeen = new Set()

    while (head) {
        if (nodesSeen.has(head)) return true;
        else { nodesSeen.add(head); }
        head = head.next;
    }
    return false;
};

var hasCycle = function (head) {
    let fast=head,slow=head
    do {
        if (!fast||!fast.next) return false
        fast=fast.next.next
        slow=slow.next
    }
    while (fast!=slow)
    return true
}