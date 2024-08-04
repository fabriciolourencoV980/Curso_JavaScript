const hora = 11;
let saudação;

if (hora < 12){
    saudação = 'Bom dia!'
} else {
    if (hora < 18){
         saudação = 'Boa tarde!'
    } else{
        saudação = 'Boa noite!'
}
    }
   
console.log(saudação)