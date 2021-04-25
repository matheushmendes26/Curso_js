const notas = [7.7,6.5,4,4.4,3.6,8,8.7,9.8,9,6.6]

//Sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i]<7)
    notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//Com callBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const menorque7 = nota => nota < 7
const notasBaixas3 = notas.filter(menorque7)
console.log(notasBaixas3)
