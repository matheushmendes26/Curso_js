console.log(Math.ceil(6.1))

const objt = {}
objt.nome = 'Bola'

console.log(objt.nome)

function O(nome){
    this.nome = nome
}

const objt2 = new O('Cadeira')
const objt3 = new O('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)