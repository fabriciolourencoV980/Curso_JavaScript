let temdinheiro = true
let ensolarado = true
let carro = false

let resultado = '1 (AND) - Vai pro shopping?'
resultado += temdinheiro && ensolarado
console.log(resultado)

let resultadou = '2 (OR) - Vai pro shopping?'
resultadou += ensolarado || carro
console.log(resultadou) 

//Quando os dois valores são iguais vai retornar "False"
console.log('\nXOR "ou exclusivo" !=')
console.log(true != false)
console.log(false != true)
console.log(false != false)
console.log(true != true)

let a = "========================="
console.log(a)

//Só precisa que um dos valores seja verdadeiro para retornar "True"
console.log('OR "ou" ||')
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(a)

//Precisa que os dois valores sejam verdadeiros para retonar "True" ou que os dois valores sejam falsos para retornar "False"
console.log('AND "e" &&')
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false )

console.log(a)

console.log('Não verdadeiro: ' + !true)
console.log('Não falso: ' + !false)