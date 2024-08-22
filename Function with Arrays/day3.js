//Write a function that takes an array and returns the last element.


function getlastElement(array) {
  for(let i =0; i < array.length; i++) {

    if (i === array.length - 1) {
        return array[i];
    }
  }
  return null;
}
let lastElement = getlastElement([2,4,6,34,75,5])
console.log("last Element of Array:",lastElement); // Output: 5


function getlastElementArray(array) {
  for(let i = 0; i < array.length; i++){
    if(i === array.length - 1){
      return array[i];
    }
  }
  return getlastElement(array); // pa shart da de che pela function ba wrla hum dase jorhwy [ka ta if ke conditon na pass kwy ala ba last element da array aklee]
}

console.log(getlastElementArray([3,56,6,8]));