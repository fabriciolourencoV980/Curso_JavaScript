function estarEntre( numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
};

console.log(estarEntre(50));