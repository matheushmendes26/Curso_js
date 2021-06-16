for(let letra of "Matheus"){
    console.log(letra)
}

const assuntosEcma = ['map','set','promise']

for(let assunto in assuntosEcma){
    console.log(assunto)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['map',{abordado: true}],
    ['set',{abordade:true}],
    ['promise',{abordado:false}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for(let chave of assuntoMap.keys()){
    console.log(chave)
}

for(let valor of assuntoMap.values()){
    console.log(valor)
}

for(let [ch,val] of assuntoMap.entries()){
    console.log(ch,val)
}

const s = new Set(['a','b','c'])

for(let letra of s){
    console.log(letra)
}
