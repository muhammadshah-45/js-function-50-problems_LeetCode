console.log("running");

//Write a function that takes an object and returns its keys

function getKeys(obj) {
    let keys = [];
    for(let key in obj){
        console.log(key);
        keys.push(key);
    }
    return keys;
}
const object= {name:"Muhammad",age:34,gender:"male"};
let objKeys = getKeys(object);
console.log(objKeys);



function getObjKeys(obj){
    let keys = Object.keys(obj);
    return keys;
}

let keysObj = getObjKeys({name:"Muhammad",age:34});
console.log(keysObj);


let getObjectKeys = (obj) =>{
    let keys = [];

    for(let key in obj){
        console.log(key);
        keys.push(key);
    }
    return keys;
}
console.log(getObjectKeys({name:"Shah",marks:456}));
