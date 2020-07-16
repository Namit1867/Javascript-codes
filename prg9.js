var last=function (date1){

var date = new Date(date1), y = date.getFullYear(), m = date.getMonth();
var lastD = new Date(y, m + 1, 0);
return lastD.getDate();
}
console.log(last("July 16,2020"));