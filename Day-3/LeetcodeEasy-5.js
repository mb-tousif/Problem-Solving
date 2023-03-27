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

// Answer: Method-2
const mergeTwoListsV2 = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoListsV2(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsV2(l1, l2.next);
        return l2;
    }
}
console.log(mergeTwoListsV2([1, 2, 4], [1, 3, 4]));