const escola = [{
    nome: 'turma1',
    alunos: [{
        nome: 'A',
        nota: 5.5
    },
    {
        nome: 'B',
        nota: 8.5
    }]
}, { 
    
    nome:'turma2',
    alunos: [{
        nome: 'C',
        nota: 7.6
    },
    {
        nome: 'D',
        nota: 8.2
    }]
}
]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([],this.map.callback)
}

const notas2 = escola.flatmap(getNotaDaTurma)

console.log(notas2)