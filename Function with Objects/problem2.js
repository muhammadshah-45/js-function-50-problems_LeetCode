console.log("running");

// Write a function that takes an object and returns its values

function getValues(obj){
    let values = [];
    for(let key in obj){
        // console.log(key);
        // console.log("value",obj[key]);
        values.push(obj[key]);
    }
    // console.log(values);
    return values;
}

let object = {name: 'Muhammad', description:"Developer", gender:"male"};

let values = getValues(object);
console.log(values);