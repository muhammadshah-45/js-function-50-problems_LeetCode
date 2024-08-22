//Write a function that takes an array and returns the maximum element.

function findFirstElementArray(arr){
     let maximum = arr[0];
    for(let index=1; index<arr.length; index++){
    
      if( arr[index] >  maximum ){
        maximum = arr[index];
          console.log("Maximum : ",maximum);
      }
    }
    return maximum;
  }
  
  console.log(findFirstElementArray([4,2,59,6]));


  function findMax(arr) {
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }

  console.log(findMax([3,5,6,3,4]));