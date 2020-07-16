function checkstr(x){
    var aux=x;
    splitstr=aux.split("");
    splitstr=splitstr.reverse();
    aux=splitstr.join("");
   return (x==aux);
}
console.log(checkstr("hello"));
console.log(checkstr("dad"));