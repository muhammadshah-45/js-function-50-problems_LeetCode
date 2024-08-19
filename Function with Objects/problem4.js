
// Write a function that takes an object and returns a new object with only the specified values.

function pick(obj, keys) {
    const newObj = {};
    // console.log(newObj);
    // console.log("keys :" ,keys);
    for (const key in obj) {
      // console.log("obj[key]:",obj[key]);
      // console.log("key: " + key);
      if (keys.includes(key)) {

        newObj[key] = obj[key];
        console.log("newObj:",newObj[key]);
      }
    }
  
    return newObj;
  }
  
  // Example usage:
  const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    occupation: 'Developer'
  };
  
  const pickedObj = pick(person, ['name', 'age']);
  console.log(pickedObj); // Output: { name: 'John Doe', age: 30 }


