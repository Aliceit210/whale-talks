// Step 1: Create a variable named input
const input = 'Hello, World!';

// Step 2: Create an array named vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Create an empty resultArray
const resultArray = [];

// Step 4: Create a loop to iterate through each letter of the input
for (let i = 0; i < input.length; i++) {
  // Step 5: Log the iterator position
  console.log('i is ' + i);

  // Step 6: Create a nested loop to iterate through the vowels array
  for (let j = 0; j < vowels.length; j++) {
    // Step 7: Log the iterator position
    console.log('j is ' + j);

    // Step 8: Compare input letter to vowels and log matches
    if (input[i] === vowels[j]) {
      console.log(input[i]);

      // Step 9: Add matching letters to the resultArray
      resultArray.push(input[i]);

      // Step 10: Double the letter 'e'
      if (input[i] === 'e') {
        resultArray.push(input[i]);
      }

      // Step 11: Double the letter 'u'
      if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}

// Step 12: Log the resultArray
console.log(resultArray);

// Step 13: Create a variable resultString to join and capitalize the resultArray
const resultString = resultArray.join('').toUpperCase();

// Step 14: Log the resultString
console.log(resultString);