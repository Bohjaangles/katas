const conditionalSum = function(values, condition) {
  let goodbois = [0];
  let result = 0;
  for (let i = 0; i < values.length; i++){
    if (condition === 'odd'){
      if (values[i] % 2 !== 0){
        goodbois.push(values[i]);
      }
    }
    if (condition === 'even'){
      if (values[i] % 2 === 0){
        goodbois.push(values[i]);
      }
    }
  }
  for (let j = 0; j < goodbois.length; j++){
    result += goodbois[j];
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));