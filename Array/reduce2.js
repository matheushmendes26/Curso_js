const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}

]

console.log(alunos.map(a => a.bolsista))

const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    return acumulador && atual
})
//Todos os alunos são bolsista??
console.log(resultado1)

const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    return acumulador || atual
})

//Algum aluno é bolsista??
console.log(resultado2)
