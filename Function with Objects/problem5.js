console.log("prblem 5");
// Here is a function that takes an object and returns the value of a specified key using a for...in loop:


function getValue(obj, key) {
  for (let k in obj) {
    if (k === key) {
      return obj[k];
    }
  }
  return null; // or undefined, depending on your preference
}
let person ={name: 'John', age:45}
console.log(getValue(person, 'name'));



function getObjValue(obj,key){
   
  for (let k in obj) {
  //  console.log(k);
  //  console.log(obj);
   if(k === key) {
     return obj[k]; // return index 0
  }
  return null; //
   
}
}
let person1 = {names: 'Muhammad',age:45}

let result = getObjValue(person1, 'names');

console.log(result);