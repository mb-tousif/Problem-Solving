// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Answer: Method-1
const reverseList = function(head) {
    return head.reverse()
};
// this is not working in leetcode but working in local. Leetcode is showing error: runtime error.
console.log(reverseList([1, 2, 3, 4, 5]));

// Answer: Method-2
const reverseListV2 = function(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
