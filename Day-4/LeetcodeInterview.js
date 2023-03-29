// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Answer: Method-1
const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// Answer: Method-1
const addTwoNumbers = (l1, l2) => {
    let head = new ListNode();
    let current = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return head.next;
}
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// Answer: Method-2
const addTwoNumbersV2 = (l1, l2) => {
    let a = parseInt(l1.join("").split("").reverse().join(""))
    let b = parseInt(l2.join("").split("").reverse().join(""))
    return a+b
}
console.log(addTwoNumbersV2([2, 4, 3], [5, 6, 4]));

// Longest Substring Without Repeating Characters
// Answer: Method-1
const lengthOfLongestSubstring = (s) => {
    let map = new Map();
    let max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j + 1);
    }
    return max;
}

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Answer: Method-1
const findMedianSortedArrays = (nums1, nums2) => {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid] + nums[mid - 1]) / 2;
}
console.log(findMedianSortedArrays([1, 3], [2]));

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string. If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
// Answer: Method-1
const reverseStr = (s, k) => {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        let end = Math.min(start + k - 1, arr.length - 1);
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join("");
}
console.log(reverseStr("abcdefg", 2));

//  Answer: Method-2
const reverseStrV2 = (s, k) => {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        arr.splice(i, k, ...arr.slice(i, i + k).reverse());
    }
    return arr.join("");
}
console.log(reverseStrV2("abcdefg", 2));
