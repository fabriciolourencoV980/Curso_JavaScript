function inverso (param){
if (typeof param === 'boolean'){
    return !param;
} else if (typeof param === 'number'){
    return -param;
} else{
   return `boolean ou número esperados, mas o parâmetro é do tipo ${typeof param}`;
}
};

console.log(inverso(true));
console.log(inverso(2000));
console.log(inverso("6"));
console.log(inverso("programação"));