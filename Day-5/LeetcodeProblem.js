// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
// Answer: Method-1

let head = [3,2,0,-4];
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

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Answer: Method-1
const detectCycle = (head) => {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
};

console.log(detectCycle(head));
