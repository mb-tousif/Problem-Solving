// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
// Answer: Method-1

let head = [1, 2, 3, 4, 5];
const middleNode = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
console.log(middleNode(head));

// Answer: Method-2

const middleNodeV2 = (head) => {
    let mid = Math.floor(head.length / 2);
    return head[mid];
};
console.log(middleNodeV2(head));