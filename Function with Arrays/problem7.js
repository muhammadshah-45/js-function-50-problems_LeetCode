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


function getMaxValue(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        
            max = arr[i];
        }
    }
    return max;
}
let array = [2,3,4,544,58,6];

let result = getMaxValue(array);
console.log(result);