const d1 = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const d2 = {
    dia: 6,
    mes: 12,
    ano: 2022,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const d3 = {
    dia: 17,
    mes: 8,
    ano: 2050,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());