const alunos = [
    {nome: 'Joao', preco: 89.99},
    {nome: 'Maria', preco: 150},
]


const despesasTotais = function(array){

    const getpreco = array => array.preco
    const soma = (total,soma) => total + soma
    const somaTotal = array.map(getpreco).reduce(soma)

    return somaTotal
}

console.log(despesasTotais(alunos))