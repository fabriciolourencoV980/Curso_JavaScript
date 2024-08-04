/*let a = 9
let b = 2
let c = 5
let soma = a + b

console.log(`A soma de ${a} + ${b} é igual a ${soma}`)

if(a + b < c){
    console.log(`A soma entre ${a} + ${b} é menor que c`)
} else {
    console.log(`A soma entre ${a} + ${b} é maior que c`)
};*/ 

function comparar(fn, n1, n2, n3){
    if(typeof fn === "function"){
        console.log(fn(n1,n2,n3));
    }
}

function somar(a, b, c){
        console.log(`o valor de a é ${a} o valor de b é ${b} o valor de c é ${c}`)
        if(a + b < c){
            console.log(`O valor entre ${a} + ${b} é menor que c`)
        } else {
            console.log(`A soma entre A + B é igual a ${a + b}`)
        }
}
comparar(somar, 10, 10, 12);