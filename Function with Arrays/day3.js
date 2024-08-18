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