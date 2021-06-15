//tagged templates: processa a tag template dentro de uma outra função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'André'
const sit = 'Aprovado'
console.log(tag `${aluno} está ${sit}`)