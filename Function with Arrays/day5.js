//Write a function that takes an array and returns the minimum element.

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//Test the function

console.log(findMin([5, 3, 8, 2, 1])); // Output: 1
console.log(findMin([-10, -5, -2, 0, 7])); // Output: -10
console.log(findMin([100, 10, 20, 30, 40])); // Output: 10

// Test with an empty array

