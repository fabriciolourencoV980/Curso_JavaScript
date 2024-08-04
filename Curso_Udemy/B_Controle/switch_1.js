let nota = 1;

switch(Math.ceil(nota)){
    default:
        console.log('[NOTA INVÁLIDA!]')
            break;
    case 10:
    case 9:
    case 8:
    case 7:    
        console.log('Aprovado!');
            break;
    case 6:
    case 5:    
        console.log('Recuperação!');
            break;
    case 4:
    case 3:
    case 2:
    case 1:            
        console.log('Reprovado')        
}