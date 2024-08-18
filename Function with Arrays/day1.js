console.log("running");

function getArrayLength(arr){
    let length = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        length++;
    }
    return length;
}

const array = [1, 2, 3, 4];

let ArrayLength= getArrayLength(array);
console.log("Array of length:",ArrayLength);