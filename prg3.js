function convert(s){
    var i=0;
    var x="";
    while(i<s.length)
    {
        if(i==0 || (i!=0 && s[i-1]==" ") ) 
        {
        x=x+s.charAt(i).toUpperCase();
        }
        else
        {
        x+=s.charAt(i);
        }
        i++;
    }
 return x;
}
console.log(convert("hello there"));
console.log(convert("dad how are you"));