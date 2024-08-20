// Here are the solutions to each problem using for loops in JavaScript:

// 1. Write a function to reverse an array:


// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }


// 1. Write a function to find the maximum value in an array:


// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }


// 1. Write a function to find the minimum value in an array:


// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }


// 1. Write a function to sort an array in ascending order:


// function sortAscending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }


// 1. Write a function to sort an array in descending order:


// function sortDescending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }


// 1. Write a function to remove duplicates from an array:


// function removeDuplicates(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }


// 1. Write a function to find the index of a specific value in an array:


// function findIndex(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }


// 1. Write a function to insert a value at a specific index in an array:


// function insertAt(arr, value, index) {
//   for (let i = arr.length; i > index; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[index] = value;
//   return arr;
// }


// 1. Write a function to remove a value at a specific index in an array:


// function removeAt(arr, index) {
//   for (let i = index; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.pop();
//   return arr;
// }


// 1. Write a function to concatenate two arrays:


// function concatenate(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   return arr1;
// }


// Note that some of these functions can be implemented more efficiently using built-in JavaScript methods, but I've used for loops as per your request.