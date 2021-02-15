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
  let slow=head,fast=head
  while (fast&&fast.next){
      slow=slow.next
      fast=fast.next.next
  }
  if (fast)slow=slow.next
  
  let left=null,mid=slow
  while (mid){
      const right=mid.next
      mid.next=left
      left=mid
      mid=right
  }

  let tail=left
  while (tail&&head){
      if (tail.val!=head.val)return false
      tail=tail.next
      head=head.next
  }       
  return true
};
//到尾与转向合并 复杂度没什么差异
var isPalindrome = function(head) {
  let fast=head,slow=head,preSlow=null
  
  while (fast&&fast.next){
      fast=fast.next.next       
      let nextSlow=slow.next; 
      slow.next=preSlow;
      preSlow=slow;
      slow=nextSlow;
  }
  if (fast)slow=slow.next
  let left=preSlow,right=slow
  while (left&&right){
      if (left.val!==right.val)return false
      left=left.next;right=right.next
  }
  return true
};