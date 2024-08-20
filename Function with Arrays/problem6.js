// 1. Write a function to reverse an array:


// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }

function reverseArray(arr){
    let reversed= [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
        
    }
    console.log(reversed);
    return reversed;
}

let array = [3,4,5,6,6,7,87];
let result = reverseArray(array);