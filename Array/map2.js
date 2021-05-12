const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
//Minha versão
const ConverteJSON = e => JSON.parse(e)
const Valor = e => Object.values(e)
const numero = e => e[1]

resultado = carrinho.map(ConverteJSON).map(Valor).map(numero)
console.log(resultado)

//Versão do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)
