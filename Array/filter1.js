const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de plástico',preco: 18.99, fragil:false}

]

const verificarFragil = verifica => verifica.fragil
const verificarCaro = k => k.preco > 1000

const resultado = produtos.filter(verificarFragil).filter(verificarCaro)
console.log(resultado)
