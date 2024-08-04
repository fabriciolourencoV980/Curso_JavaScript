// Exemplo for_4.js com If...


for(let i = 1; i <= 3; i++){
    let linha = '';  
    for(let j = 1; j <= 3; j++){
        if(i !== j){
            linha += `[${i}, ${j}]`;
        }
    }      
      console.log(linha);
}