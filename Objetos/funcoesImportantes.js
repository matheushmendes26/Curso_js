const pessoa = {
    nome: 'Rebeca',
    idede: 12,
    peso: 40
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa,'datadenascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2009'
})

pessoa.datadenascimento = '01/01/2012'
console.log(pessoa.datadenascimento)

//Objetc.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:4}
const o2 = {c:5,a:7}
const obj = Object.assign(dest,o1,o2)
console.log(obj)
