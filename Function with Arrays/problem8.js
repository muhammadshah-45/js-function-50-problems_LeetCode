console.log("problem 8");


// 1. Write a function to find the minimum value in an array:

function findMinValue(arr){
    let minValue =arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }
    return minValue;

}
let array = [42,5,3,78,997,4,1];

let result = findMinValue(array);
console.log(result);
