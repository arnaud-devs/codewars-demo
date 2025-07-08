// function sum (numbers) {
//     let sum=0;
// return (numbers.length > 0) ? (numbers.forEach((element) => { let sum =0; sum += element;})) : 0;
// }
// console.log(sum([]));

let sum = numbers => numbers.reduce((a, b) => a + b, 0);
console.log(sum([1, 5.2, 4, 0, -1]));