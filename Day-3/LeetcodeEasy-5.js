// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Answer: Method-1
const mergeTwoLists = (l1, l2) => {
    let head = new ListNode();
    let current = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return head.next;
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));