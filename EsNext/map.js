const tecnologias  = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular').framework)

const chavesvariadas = new Map([
    [function(){},'function'],
    [{},'Objeto'],
    [123,'numero']
])

chavesvariadas.forEach((valor,ch) =>{
    console.log(ch,valor)

})
console.log(chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))

chavesvariadas.set(123,'a')
chavesvariadas.set(345,'a')
chavesvariadas.forEach((valor,ch) =>{
    console.log(ch,valor)

})


