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

/**
 * Write a function to determine if one String is a case-insensitive anagram 
 * of another String.
 */
// ana-gram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

function isAnagram(str1, str2) {
    // convert both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // sort both strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    // compare both strings
    return str1 === str2;
}

