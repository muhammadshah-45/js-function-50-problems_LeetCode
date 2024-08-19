function pickWithForIn(obj, keys) {
    const newObj = {};
    for (const key in obj) {
      if (keys.includes(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
// Explanation:
// const newObj = {};: Creates an empty object to store the selected key-value pairs.
// for (const key in obj): Iterates over each key in the original object.
// if (keys.includes(key)): Checks if the current key is included in the specified keys array.
// newObj[key] = obj[key];: If the key is included, copies the key-value pair to the new object.
// return newObj;: Returns the new object with the selected keys.
// Example Usage:

const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    occupation: 'developer'
  };
  
  const selectedKeys = ['name', 'age'];
  const newObject = pickWithForIn(person, selectedKeys);
  
  console.log(newObject); // Output: { name: 'John Doe', age: 30 }



  function  pickSpecificKeys(Obj,keys){
    let newObj ={};
    console.log(Obj);
    console.log("keys:",keys);
    for(let key in  Obj){
      // console.log("Objvalue:",Obj[key]);
       if(keys.includes(key)){
        newObj[key] = Obj[key];
      //ObjKeys     = ObjValues => they will be print in the console
        console.log("newObj:",newObj);
        console.log("ObjKey:",Obj[key]);
       }
    }
    return newObj;
  }
  let newObj = {student:"Shah",teacher:"MehtabAlam",class:10};
  
  let specificKey = ["student","class"]

  let pickSpecificKeysObj = pickSpecificKeys(newObj ,specificKey);

  console.log(pickSpecificKeysObj); // Output: { name: 'John Doe
