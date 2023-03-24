// Write a function to generate five digit OPT in JavaScript? 
// Answer:
const generateOTP = () => {
    // Declare a string variable which stores all string
    let string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';
    for (let i = 0; i < 5; i++) {
        OTP += string[Math.floor(Math.random() * string.length)];
    }
    return OTP;
}
generateOTP()

// Write a function to remove all 0 from a given array and push those 0 in the end of that array and sort the array in ascending order in JavaScript? 
// Answer:
const arr = [3,4, 0, 5,7,0,1,2]

const removeZero = (arr) => {
    let newArr = [];
    let zeroArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
            newArr.sort((a, b) => a - b);
        }
    }
    return newArr.concat(zeroArr);
}
console.log(removeZero(arr));

// Write a function to find the longest word in a string in JavaScript?
// Answer:

const longestWord = (str) => {
    let arr = str.split(' ');
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestWord('Web Development Tutorial'));


// Write a function to find the smallest word in a string in JavaScript?
// Answer:

const smallestWord = (str) => {
    let arr = str.split(' ');
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestWord('Web Development Tutorial'));