const sortArray = (arr) =>{
    let odd =  arr.filter((el)=>el % 2 !== 0).sort((a,b)=> a-b);
    return arr.reduce((acc, el)=> el%2 ? [...acc, odd.shift()] : [...acc, el], [])
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))