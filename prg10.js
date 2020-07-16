var yest=function (date1){

    var yesterday=new Date(date1);
   yesterday.setDate(yesterday.getDate());
    return yesterday;
    }
    console.log(yest("July 2,2020"));