const bom = function (hora){
    if (hora <= 5){
        return 'BOA MADRUGADA!'
    }
    else if (hora <= 12){
        return 'BOM DIA!'
    } else if (hora <= 17){
        return 'BOA TARDE!'
    } else if (hora <= 23) {
        return 'BOA NOITE!'
    }
}
const dia = function(seman){
    if(seman === 'DOM'){
        return 'Hoje é Domingo! Inicio da semana!'
    } else if (seman === 'SEG'){
        return 'Hoje é Segunda! Agora começou a semana de verdade!'
    } else if (seman ==='TER'){
        return 'Hoje é Terça! E corresponde ao Terceiro dia da semana!'
    } else if (seman === 'QUA'){
        return 'Hoje é Quarta! E corresponde ao meio da semana'
    } else if (seman === 'QUI'){
        return 'Hoje é Quinta! É o penultimo dia da semana para quem não trabalha no Sábado' 
    } else if (seman === 'SEX') {
        return 'Hoje é Sexta! último dia da semana'
    } else if (seman === 'SAB'){
        return 'Hoje é Sábado! Aprveite o dia ;)'
    } else {
        return '[VALOR INVÁLIDO] Por favor digite um valor Válido!'
    }
}
console.log(dia('SAB'));
console.log(bom(5));