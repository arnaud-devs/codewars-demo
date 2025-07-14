const solution = (roman)=>{
const rom = {
    I: 1,
    V: 5,
    X :10,
    L :50,
    C :100,
    D :500,
    M :1000
}
let sum = 0;
let k = 0
let arr= roman.split('').map((el)=>(el in rom)?(el = rom[el]): "hello").map(Number)
let result = arr.slice(1).map((el,index)=> {
    if(arr[index] < el){
        return -arr[index];
    }
    else{
        return arr[index];
    }
})
result.push(arr[arr.length-1])
for(let i = 0 ; i<result.length;i++){
    sum = sum + result[i];
}
return sum;
}