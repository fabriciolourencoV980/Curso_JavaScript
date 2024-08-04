function funcao(grau){
if (grau === 'segundo'){
    return console.log('f(x)= a**2 - bx + c')
}
else if (grau === 'terceiro'){
    return console.log('f(x)= ax**2 + bx**2 + cx + d')
}
else if (grau === 'quarto'){
    return console.log('ax**4 + bx**3 + cx**2 + dx + e = 0')
}
else{
    return console.log('ax + b')
}
};

funcao('')