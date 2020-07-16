function uniqchar(str1)
{
 var aux="";
 for (var x=0;x<str1.length;x++)
 {
    var c=str1.charAt(x);
    if(aux.indexOf(c)==-1)
    aux+=str1.charAt(x);  
}
  return aux;  
}  
console.log(uniqchar("ababab"));