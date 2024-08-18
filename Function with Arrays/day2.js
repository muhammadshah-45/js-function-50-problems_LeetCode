//Write a function that takes an array and returns the first element.

function getFirstElement(arr) {
     
      for(let i = 0; i < arr.length; i++) {

        if(i === 0 ){

            return arr[i];
        }else{
            return null;
        }
      }
}


// console.log(array.indexOf(array[4]));

let firstArrayElement =getFirstElement([2,5,6,34,64]);
console.log("Array of first element:",firstArrayElement);