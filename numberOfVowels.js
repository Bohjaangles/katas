// Function to add the number of values of a given string
const numberOfVowels = function(data) {
  let result = 0; // var to store the vowel count
  for (let i = 0; i < data.length; i++){ // for loop to go through string
    switch (data[i]){ // switch statement to flag vowel instances and update result var
      case 'a':
        result++;
        break;
      case 'e':
        result++;
        break;
      case 'i':
        result++;
        break;
      case 'o':
        result++;
        break;
      case 'u':
        result++;          
    }
  }
  return result; // output the total
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));