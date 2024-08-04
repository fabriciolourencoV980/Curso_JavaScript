//Passando função como parâmetro para outra função;

function executar(fn, n1, n2){
    if (typeof fn === "function"){
        console.log(fn(n1, n2));
    }
}

function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

executar(multiplicar, 9, 10);
executar(subtrair, 13, 15 );
executar(somar, 10, 60);


/*function executar(fn, n1 = 10, n2 = 10){
    if (typeof fn === "function"){
        console.log(fn(n1, n2));
    }
}

function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

executar(multiplicar, 9, 10);
executar(subtrair, 13, 15 );
executar(somar, 10, 60);*/

