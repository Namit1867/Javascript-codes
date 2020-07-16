var check_weekend = function(date1){
  var d=new Date(date1);
  return d.getDay();
}
console.log(check_weekend('July 20,2020'));