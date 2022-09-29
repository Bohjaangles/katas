// Function to find the two largest numbers in an array of ints and return the sum of those two ints
const sumLargestNumbers = function(data) {
  let biggest = 0;
  let second_biggest = 0;
  for (let i = 0; i < data.length; i++){ // Find the biggest int number in array and store in var
    if (data[i] > biggest){
      biggest = data[i];
    }
    for(let j = 0; j < data.length; j++){ // Find the second biggest int in array and store in var
      if (second_biggest < data[j] && data[j] < biggest){
        second_biggest = data[j];
      }
    }
  }
  result = biggest + second_biggest; // Add the two largest numbers in the array
  return result; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
