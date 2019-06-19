var deleteNode = function(node) {    
    while (node.next!=null) {
        node.val=node.next.val
        if (node.next.next==null) {
            node.next=null
            break
        }
        node=node.next        
    }
};

var deleteNode = function(node) {
    node.val=node.next.val
    node.next=node.next.next
};