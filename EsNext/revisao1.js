// let e var em JavaScript

{
    let a = 2
    var b = 3
    console.log(a)
}
console.log(b)

//template String
const a = 'Lindo'

console.log(`Meu nome é ${a}`)

//Destructuring

const [l,e,...tras] = "Coder"
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome:'Ana',idade:9}
console.log(i,nome)
