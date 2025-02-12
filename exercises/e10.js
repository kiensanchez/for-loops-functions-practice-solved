// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let arr = [];
  let ans = [];

  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].name);
  }

  for (let i = 0; i < arr.length; i++) {
    let letters = arr[i].split("");

    for (let p = 0; p < letters.length; p++) {
      if (letters[p].toLowerCase() === letter) {
        ans.push(arr[i]);
        break;
      }
    }
  }

  return ans;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
