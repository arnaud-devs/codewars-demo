// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"


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