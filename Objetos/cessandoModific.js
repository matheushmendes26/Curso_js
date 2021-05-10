//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Para apagar'
delete produto.tag
console.log(produto)

const pessoa = {
    nome: 'Juliette', idade: 31
}
Object.seal(pessoa)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 32
console.log(pessoa)

//Object.freeze = Object.seal + atributos constante

