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