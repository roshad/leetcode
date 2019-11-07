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
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) slow = slow.next;
  let left = null,
    mid = slow,
    right;
  while (mid) {
    right = mid.next;
    mid.next = left;
    left = mid;
    mid = right;
  }
  let foot = left;
  while (head && foot) {
    if (head.val != foot.val) return false;
    foot = foot.next;
    head = head.next;
  }
  return true;
};
