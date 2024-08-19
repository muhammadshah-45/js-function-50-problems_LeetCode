// // You're absolutely right!
// // There seems to be a misunderstanding. These two tasks require different logic:

// // Function to pick specific keys from an object
// // This function creates a new object containing only the specified keys from the original object.

// function pick(obj, keys) {
//     const newObj = {};
  
//     for (const key in obj) {
//       if (keys.includes(key)) {
//         newObj[key] = obj[key];
//       }
//     }
  
//     return newObj;
//   }


//   //Function to pick specific values from an object
// // This function is more complex as it requires mapping values to new keys. You'd typically need a mapping object to specify which value should be assigned to which new key.

// function pickValues(obj, valueMap) {
//     const newObj = {};
  
//     for (const key in obj) {
//       const newKey = valueMap[obj[key]];
//       if (newKey) {
//         newObj[newKey] = obj[key];
//       }
//     }
  
//     return newObj;
//   }

//   const person = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York',
//     occupation: 'Developer'
//   };
  
//   // Pick specific keys
//   const pickedObj = pick(person, ['name', 'age']);
//   console.log(pickedObj); // Output: { name: 'John Doe', age: 30 }
  
//   // Pick specific values (assuming you have a valueMap)
//   const valueMap = {
//     'John Doe': 'fullName',
//     30: 'yearsOld'
//   };
//   const pickedValuesObj = pickValues(person, valueMap);
//   console.log(pickedValuesObj); // Output: { fullName: 'John Doe', yearsOld: 30 }

// //   Note: The pickValues function requires a valueMap object to define the mapping between original values and new keys. Without this mapping, it's not possible to determine which values to include in the new object.

// // Would you like to explore either of these functions further or do you have another task in mind?



//Let's Practice on Problem 3

function ObjectKey(obj,keys){
    let newObj ={};
    console.log("emptyObject",newObj);
    for(let key in obj){
      console.log("line67",key);
      console.log("line68",obj[key]);
      if(keys.includes(key)){
        newObj[key] = obj[key];
        console.log("newObj",newObj[key]);
      }
    }

    return newObj;
}
let person1 = {name: 'Muhammad',age:34};
let selectedKeys = ["name"];
let result =ObjectKey(person1,selectedKeys);
console.log(selectedKeys);
console.log(result);