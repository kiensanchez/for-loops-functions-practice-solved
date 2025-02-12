// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arr = [[], []];

  for (let i = 0; i < array.length; i++) {
    let nameArr = array[i].split("");

    for (let p = 0; p < nameArr.length; p++) {
      if (nameArr[p] === "a" || nameArr[p] === "A") {
        arr[0].push(array[i]);
        break;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    let bool = false;
    for (let p = 0; p < arr[0].length; p++) {
      if (arr[0][p] === array[i]) {
        bool = true;
        break;
      }
    }
    if (bool === false) {
      arr[1].push(array[i]);
    }
  }

  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
