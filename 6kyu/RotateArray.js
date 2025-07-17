const rotate = (array,n) =>{
    let a = -n;
    let l = array.length
    return [...array.slice((n>l)?-(n%l):((n<-l)?-(n%l):(a))), ...array.slice(0,(n>l)?-(n%l):((n<-l)?-(n%l):(a)))]
}