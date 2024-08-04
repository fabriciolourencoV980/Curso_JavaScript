const t1 = true
const t2 = false

let comprarTV50 = t1 && t2 //AND
console.log('Vamos comprar a TV de 50"? ', comprarTV50 ) 

let comprarTV35 = t1 !== t2 //XOR
console.log('Vamos comprar a TV de 35"? ', comprarTV35 ) 

let tomarsorvete = t1 || t2 //OR
console.log('#1 - Vamos comprar sorvete? ', tomarsorvete ) 

let ficaremcasa = !tomarsorvete //NOT 
console.log('Vamos ficar em casa?', ficaremcasa) 