console.log("problem 9");

// 1. Write a function to sort an array in ascending order:

function sortedArray(arr){
     
    for(var i=0; i<arr.length; i++){
    
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                // console.log(arr[i]);
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
   return arr;
}

let array = [3,4,7,56,89,89,0,4];

let result = sortedArray(array);
console.log(result);