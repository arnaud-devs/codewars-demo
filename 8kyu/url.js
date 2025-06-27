function domainName(url){
  //your code here
  for(let i = 7 ; i < url.length ; i++){
    if(url[i] === '.'){
      result =url.split('');
      output = result.slice(7,i);
      rs = output.join('');

    }
  }
  return rs;
}
url = "http://google.com";

console.log(domainName(url));