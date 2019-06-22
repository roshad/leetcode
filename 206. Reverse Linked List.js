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

var reverseList = function(head) { 

    const recurse= (lef,mid,rig)=>{
        if (!mid) return lef
        mid.next=lef
        lef=mid;mid=rig;rig=rig||{}.next
        return recurse(lef,mid,rig)
    }
    return recurse(head,head.next,head.next.next)
}
