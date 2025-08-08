const solution =(number)=>{
    let multiple = [];
    for(let i = 1 ; i< number ;i++){
        if(i % 3 == 0 || i % 5 ==0)  multiple.push(i)
    }
return multiple.reduce((sum , el) => el > 0 ? sum = sum+el : sum=sum, 0);
}