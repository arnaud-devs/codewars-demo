// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (word)=>word.split('').map((el) => (el === el.toUpperCase()) ? el=" "+el : el).join('');