function executar (fn){
    if(typeof fn === "function")
    console.log(fn());  //---> Central da Aula
}
function bomDia(){
    return 'Bom dia!'
}

//executar(bomDia); ---> Central da aula
executar(3); 