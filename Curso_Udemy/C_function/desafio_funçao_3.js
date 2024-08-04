//Calcular a média usando as duas maiores notas, O aluno estará aprovado se a nota for maior ou igual a 7, em recuperação se for maior ou igual a 4, e menor que 4  reprovado.

const nota1 = 7.8;
const nota2 = 1.1;
const nota3 = 2.1;
const calc = nota1 + nota2 + nota3 /3; 

//Minha resposta
/*function calcularMedia (nota){
   if (calc){
    if (nota >= 7){
        console.log('[APROVADO]')
    } else if (nota >= 4.5){
        console.log('[RECUPERAÇÂO]')
    } else {
        console.log('[REPROVADO]')
    }
   }
    
}

console.log(calc);
calcularMedia(calc);*/

//Resposta do curso

function minimo(n1, n2){
    return n1 <= n2 ? n1 : n2
}
function media(n1, n2, n3){
    const menorNota = minimo(n1, minimo(n2, n3))
    if(menorNota === n1){
        return (n2 + n3) / 2; 
    } else if (n2 + n3){
        return (n1 + n3) / 2;
    } else { 
        return (n1 + n2) / 2;
    }
}
function mediaParaStatus(media){
    if (media >= 7){
        return 'APROVADO'
    } else if (media >= 4){
        return 'RECUPERAÇÂO'
    } else {
                'REPROVADO'
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus (mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}!`);