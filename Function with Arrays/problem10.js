// 1. Write a function to sort an array in descending order:

console.log("problem 10");

function sortDescending(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i]< arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
}

let array = [23,5,74,7,3,8,99,86,2];
let result = sortDescending(array);
console.log("descending array");
console.log(result);
