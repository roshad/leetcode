var removeNthFromEnd = function (head, n) {
    let reader = head, len = 0
    while (reader) {
        len++
        reader = reader.next
    }
    //console.log(len)

    let dummy = new ListNode()
    dummy.next = head
    reader = dummy

    let steps = len - n
    while (steps--) reader = reader.next

    reader.next = reader.next.next
    return dummy.next
};