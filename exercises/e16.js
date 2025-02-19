// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    if (typeof array[i] !== "object") {
      newArr.push(array[i]);
    } else {
      for (let p = 0; p < arr.length; p++) {
        newArr.push(arr[p]);
      }
    }
  }

  return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
