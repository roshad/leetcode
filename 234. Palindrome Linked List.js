//转化为str
var isPalindrome = function(head) {
    let forward_str = (backward_str = "");
    while (head) {
        forward_str += head.val;
        backward_str = head.val + backward_str;
        head = head.next;
    }
    return forward_str == backward_str;
};

var isPalindrome = function(head) {
    let slow = (fast = head);

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast) slow = slow.next;

    let left = null,
        cur = slow,
        right = (slow || {}).next;
    while (cur) {
        cur.next = left;
        left = cur;
        cur = right;
        right = (right || {}).next;
    }
    let end = left;

    while (end) {
        if (end.val !== head.val) return false;
        end = end.next;
        head = head.next;
    }
    return true;
};
