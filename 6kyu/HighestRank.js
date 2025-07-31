const  highestRank = (arr)=>{
    let m = new Map();
    for(let el of arr){
        m.set(el, (m.get(el)|| 0)+1)
    }
    let frequently = Array.from(m).sort((a,b)=>b[1] - a[1]).filter((el,index,arr)=>{if(el[1] == arr[0][1]) return el[0]});
    return (frequently.length > 1 )?(frequently.sort((a,b)=>b[0]-a[0]))[0][0]:(frequently[0][0]);
}