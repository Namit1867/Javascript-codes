function count_occur(str,c)
{
 var str1=str;
 var c=c;
 var count=0;
 for (var x=0;x<str1.length;x++)
 if(str.charAt(x)==c)
 count++;
  return count;  
}  
console.log(count_occur("ababab",'a'));