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


// let's take a function with a parameter

function findLengthArray(arr){
    let length = 0;
    console.log("before looping the length of array is:",length);
    for(let i = 0; i < arr.length; i++){
        console.log("index",i); // it represents the index of array
        console.log("value of array :",arr[i]); // it represents the value of an array
        console.log("length:",length++); // it will be looping the length of the array
    }
    console.log(length);// why it comes the value of undefined in the console

    return length;
}
console.log(findLengthArray([3,4,3,2]));