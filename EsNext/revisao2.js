//Arrow function
const soma = (a,b)=> a+b
console.log(soma(2,3))

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)

}

log()

//operador rest

function total(...num){
    let total = 0
    num.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4))


