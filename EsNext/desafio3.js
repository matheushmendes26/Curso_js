const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function exibirConteudo(){
    return new Promise(resolve =>{
        fs.readFile(caminho, function(_,conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')

    })
}

exibirConteudo()
.then(console.log)
