// Description:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  // your code here
  let count= 0;
  let result  = [];
  let sumOfNegative = 0;
  if(input === null){
    return  result;
  }
  else if(input.length <= 0){
    return result;
  }
  else{
     for(let i = 0 ; i < input.length; i++){
    if(input[i]>0){
      count = count + 1;
    }
    else if(input[i]<0){
      sumOfNegative = sumOfNegative + input[i];
    }
  }
  result.push(count);
    result.push(sumOfNegative);
  return result;
  }
}