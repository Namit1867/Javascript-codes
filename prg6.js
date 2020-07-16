function funname(){
    console.log(arguments.callee.name);
}
funname()