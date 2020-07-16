var diff = function(date1,date2){
    var d1=new Date(date1);
    var d2=new Date(date2);
    var differ=d2.getTime()-d1.getTime();

    return differ/(1000*3600*24);
  }
  console.log(diff("07/16/2020","07/20/2020"));