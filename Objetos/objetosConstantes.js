const pessoa = { nome: 'Pedro'}
console.log(pessoa.nome)
pessoa.nome = 'Maria'
console.log(pessoa.nome)


Object.freeze(pessoa)
pessoa.nome = 'Ana'
pessoa.end = 'Rua A'

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Matheus'})
