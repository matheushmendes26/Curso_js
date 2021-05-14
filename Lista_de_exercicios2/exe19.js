const alunos = [
    {nome: 'Joao', preco: 89.99},
    {nome: 'Maria', preco: 150},
]


const calculaMedia = function(array){

    const soma = (total,soma) => total + soma
    const somaTotal = array.reduce(soma)
    let media_ = somaTotal/array.length

    return media_
}

console.log(calculaMedia([1,2,3,4,5]))