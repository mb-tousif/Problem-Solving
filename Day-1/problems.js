/**
 * Write a function to determine the largest difference between any two numbers
 * in an array of numbers
 */

let numbers = [12, 5, 6, 9, 10, 2, 12, 2, 6, 5, 9, 10, 33];

let difference = (function (arr) {
    // Remove duplicate elements from the array
    let unique = [...new Set(arr)].sort((a, b) => a - b);
    // console.log(unique);
    // calculate the difference between the first and last element
    return unique[unique.length - 1] - unique[0];
})(numbers);

console.log(difference);