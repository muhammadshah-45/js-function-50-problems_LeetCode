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



let values = getValues({name: 'Muhammad', description:"Developer", gender:"male"});
console.log(values);


let getObjectValue =(obj,keys) => {
    let value = [];
    console.log("keys:",keys);
    console.log("obj",obj);
    for (let key in object2) {
        console.log("obj:",obj);
        console.log("key of Object2: " + key);
        console.log("values of Object2: ",object2[key]);
         value.push(object2[key]); 
        //  value.push(obj[key]);  it will be print in the array 
    }
    return value;
}

let object2={name:"mango",price:"45$",type:"Fruit"};

let ObjectValue = getObjectValue(object2,object2);
console.log(ObjectValue);