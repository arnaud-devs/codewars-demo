// Step 1.  Creating  new Array
// Step 2.  Iterating through the array using for of 
//step 3. check if the element occur more than

const deleteNth = (arr,n) =>{
    let result = [];
    
    for(let i of arr){
        if(result.filter(el => el === i).length < n){
            result.push(i)
        }
    }
    return  result;

}