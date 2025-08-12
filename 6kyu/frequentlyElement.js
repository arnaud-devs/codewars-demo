Input:
// A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

// Output:
// An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

// https://www.codewars.com/kata/578b44a47c77f5a1bd000011/javascript


const  getMostFrequent =(json)=> {
    let arr = json.temperature;
     return arr.map(ele => ele.reduce((acc ,n, index , array)=>array.filter(el => el === n).length >= array.filter(el => el === acc).length ? n : acc ))
}
