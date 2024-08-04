const hora = 22;
let saudação;

if (hora < 12){
    saudação = 'Bom dia!'
} else {if (hora < 18){
    saudação = 'Boa tarde!'
} else {
    if (hora < 22) {
        saudação = 'Boa noite!'
    } else {
        saudação = 'Muito tarde!'
        }
    }
}
console.log(saudação)