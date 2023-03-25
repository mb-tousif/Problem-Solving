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

// Answer: Method-2

const runningSumV2 = (arr) => {
    let sum = 0;
    return arr.reduce((result, num) => {
      sum += num;
      result.push(sum);
      return result;
    }, []);
  };

console.log(runningSumV2(arr));