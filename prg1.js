function revnum(x){
    var rev=0;
    while(x!=0)
    {
        var last=x%10;
        rev=(rev*10)+last;
        x=parseInt(x/10);
    }
    return rev;
}
console.log(revnum(32768));
console.log(revnum(75674));
