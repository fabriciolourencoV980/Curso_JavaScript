const a = 10;
const b = 28;
const operação = '%' // + - / %

let resultado;

if (operação === '+'){

    resultado = a + b
}
else if (operação === '*'){
    
    resultado = a * b
}
else if (operação === '/'){
    
    resultado = a / b
}
else if (operação === '%'){

     resultado = a % b 
} 
else if (operação === '-' ){
    
    resultado = a - b
} else {
    console.log('[ERROR] Valor não conhecido!')
}

console.log(resultado)
