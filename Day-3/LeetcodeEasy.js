// Problem-1: Write a function to calculate the running sum of an array in JavaScript? 
// Answer: Method-1

const arr = [5, 6, 7, 8, 9, 10];

const runningSum = (arr) => {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }
    return newArr;
}

console.log(runningSum(arr));