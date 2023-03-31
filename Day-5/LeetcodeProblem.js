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

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 
// Answer: Method-1
const reverse = (x) => {
    let rev = 0;
    while (x !== 0) {
        rev = rev * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) ? 0 : rev;
};
console.log(reverse(123));

// Implement the myAtoi function, which converts a string to a 32-bit signed integer. 
// Answer: Method-1
const myAtoi = (str) => {
    let num = parseInt(str);
    if (isNaN(num)) {
        return 0;
    }
    if (num < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }
    if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return num;
};
console.log(myAtoi("42"));

// Answer: Method-2
const myAtoiV2 = (str) => {
    let num = parseInt(str);
    if (isNaN(num)) {
        return 0;
    }
    return Math.max(Math.pow(-2, 31), Math.min(num, Math.pow(2, 31) - 1));
};
console.log(myAtoiV2("42"));

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).

// Answer: Method-1
const isMatch = (s, p) => {
    let reg = new RegExp(p);
    return reg.test(s);
};
console.log(isMatch("aa", "a*"));

