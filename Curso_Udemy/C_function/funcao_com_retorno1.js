function sempreRetornaUm(){
    return 1;
}

function textoOuNumero(retornatexto){
     //return retornatexto ? "É um texto" : 123;       
    
        if(retornatexto){
                return "É um texto!"
            } else {
                return '123 [Não é um texto]'
            }
}

//let valor = sempreRetornaUm() + 9;
//console.log(valor);

console.log(textoOuNumero(false));