const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'RUA ABC',
        numero: '123',
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital X',
            'Shopping Y'
        ]
    },
    nomeFilho: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);