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
    if (!head || !head.next) return false

    let 
        slow = head,
        fast = head.next;
    while (slow != fast) {
        if (!fast || !fast.next) return false;

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};