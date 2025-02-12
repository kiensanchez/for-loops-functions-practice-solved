// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let depositsArr = array[i].deposits;
    let withdrawArr = array[i].withdrawals;
    let dep = array[i].deposits;
    let withdraw = array[i].withdrawals;
    let bal = array[i].balance;

    if (!dep) {
      break;
    } else if (!withdraw && dep.length === 1) {
      if (dep[0] !== bal) {
        arr.push(array[i]);
      }
    } else {
      let depSum = 0;
      let withdrawSum = 0;
      for (let p = 0; p < depositsArr.length; p++) {
        depSum += depositsArr[p];
      }
      for (let o = 0; o < withdrawArr.length; o++) {
        withdrawSum += withdrawArr[o];
      }
      if (depSum - withdrawSum !== bal) {
        arr.push(array[i]);
      }
    }
  }

  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
