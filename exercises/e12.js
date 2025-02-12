// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let newArr = array[i].deposits;

    if (!newArr) {
      break;
    } else if (newArr.length === 1 && newArr[0] > 100) {
      arr.push(newArr[0]);
    } else {
      for (let p = 0; p < newArr.length; p++) {
        if (newArr[p] > 100) {
          arr.push(newArr[p]);
        }
      }
    }
  }

  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
