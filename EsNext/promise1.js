const { lowerCase } = require("lodash")

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

p.then(function(valor){
    console.log(valor)
})


let m = new Promise(function(cumprir){
    cumprir(['Ana','Bia','Carlos','Dani'])
})

//.then(valor => valor[0])
//.then(valor=> valor[0])
//.then(valor =>lowerCase(valor))
//.then(console.log)

const primeiraLetra = string => string[0]
const letraMin = letra => lowerCase(letra)

m
.then(primeiraLetra)
.then(primeiraLetra)
.then(letraMin)
.then(console.log)