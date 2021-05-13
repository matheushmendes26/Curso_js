const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
]

//Imperativo
let total1 = 0
for(let i = 0;i<alunos.length;i++){
    total1 = total1 + alunos[i].nota
}

console.log(total1/alunos.length)

//Declarativo
const getnota = aluno => aluno.nota
const soma = (total,soma) => total + soma
const total2 = alunos.map(getnota).reduce(soma)
console.log(total2/alunos.length)
