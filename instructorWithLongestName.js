// Function to return object that has the longest name property
const instructorWithLongestName = function(instructors) {
  let longestName = {}; // Holding object
  let tempVar = 0; // sets to equal the number of chars in the longest name each iteration
  let lessTempVar = 0; // temp var to hld the num of chars to check against the tempVar
  for (let i = 0; i < instructors.length; i++){ // To iterate through each object
    let j = 0;
    while (j < instructors[i].name.length){ // To iterate through the chars of each name in the given object
      tempVar++;
      j++;
    }
    if (tempVar > lessTempVar){
      lessTempVar = tempVar;
      longestName = instructors[i];
    }
    j = 0;
    tempVar = 0;
  }
  return longestName; // returns an object equal to the object in the given array with the longest name property value
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));