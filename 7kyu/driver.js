function driver(data) {
  // Code here
let output=[];
    const monthMap = {
        "jan": "01", "feb": "02", "mar": "03", "apr": "04",
        "may": "05", "jun": "06", "jul": "07", "aug": "08",
        "sep": "09", "oct": "10", "nov": "11", "dec": "12","september":"09"
    };
  let firstname = data[0];
  let middlename = data[1];
  let surname = data[2].split('');
  let date = data[3].split('-');
  
  if(surname.length<5){
    let left = 5 - surname.length;
    for(let i = 1; i<= left ; i++){
      surname.push('9');
    }
  }
let result = surname.map(element => element.toUpperCase());
let year = date[2];
let month = date[1].toLowerCase();
result.push(year[2]);
if(data[4] == 'F' || data[4] == 'f'){
    result.push(Number(monthMap[month])+50);
}
else{
    result.push(monthMap[month])
}

result.push(date[0]);
result.push(year[3]);
let b = firstname[0].toUpperCase();
if(middlename.length<1){
    b = b + 9;
}
else{
    b= b + middlename[0].toUpperCase();
}
result.push(b,9,'AA');



return result.join('');
}
let data = ["John","James","Smith","01-Jan-2000","M"];

console.log(driver(data));