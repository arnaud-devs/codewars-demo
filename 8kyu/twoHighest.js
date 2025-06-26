// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
function twoHighest(arr) {
  let result = [];
  let sorted = arr.sort((a,b)=> a - b);
  if(arr.length === 0){
    return result;
  }
  else if(arr.length ===1){
    return arr;
  }
  else{
  for(let i = sorted.length-1 ; i > 0 ; i--){
    if(sorted[i] != sorted[i-1]){
      result.push(sorted[i]);
      result.push(sorted[i-1]);
      break;
    }
  }
    return result;
  }
}