function calcularSalario (d1, h2){
    return ((d1 * h2) - (30/100));
}

const salario = (calcularSalario(150, 40.5));
console.log(`Salário líquido é igual a R$ ${salario}`)