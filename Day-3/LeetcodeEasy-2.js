// calculate the pivot index of any given array.
// An array's pivot index is the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If no such index exists, return -1.
// Answer: Method-1
const arr = [1, 7, 3, 6, 5, 6];
const pivotIndex = (arr) => {
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === sum - leftSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}
console.log(pivotIndex(arr));
// Answer: Method-2
const pivotIndexV2 = (arr) => {
    let sum = arr.reduce((a, b) => a + b);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === sum - leftSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}
console.log(pivotIndexV2(arr));
