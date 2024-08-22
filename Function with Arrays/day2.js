//Write a function that takes an array and returns the first element.

function getFirstElement(arr2) {
     
      for(let i = 0; i < arr2.length; i++) {

        if(i === 0 ){

            return arr2[i];
        }else{
            return null;
        }
      }
}


// console.log(array.indexOf(array[4]));

let firstArrayElement =getFirstElement([2,5,6,34,64]);
console.log("Array of first element:",firstArrayElement);



function findFirstElementArray(arr){
  
  for(let index=0; index<arr.length; index++){
    console.log("index",index);
    // console.log("value : ",arr[index]);
    if( index === 0 ){
        console.log("first Element of array",arr[index]);
    }else{
      console.log("not found");
    }
  }
  return getFirstElement(arr);
}

console.log(findFirstElementArray([40,2,5,6]));