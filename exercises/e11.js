// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let newArr = array[i].withdrawals;
    let sum = 0;

    if (!array[i].withdrawals) {
      arr.push(0);
    } else if (newArr.length === 1) {
      arr.push(newArr[0]);
    } else {
      for (let p = 0; p < newArr.length; p++) {
        sum += newArr[p];
      }
      arr.push(sum);
    }
  }

  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
