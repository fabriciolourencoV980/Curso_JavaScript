const a = 8;
const b = 4;
const operação = '/' // + - * /;

const resultado = 
    operação === '+' ? a + b : 
        operação === '-' ? a - b : 
            operação === '/' ? a / b : 
                operação === '*' ? a * b : a * b;
console.log(resultado);

// let saudações = hora <= 11 ? "Bom dia" : "Boa tarde"
//                     |             |           |
//                 expressão         |           |
//                                  True         |
//                                              False