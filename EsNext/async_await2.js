const { reject } = require("lodash")

function gerarNumeroEntre(min, max, numerosProibidos = []){
    if(min>max){
        [max, min] = [min, max]
    }

    return new Promise((resolve,reject) => 
    {
        const fator = max-min +1
        const aleatorio  = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero repetido!')
        }else{
            resolve(aleatorio)
        }
    })

}

async function gerarMegaSena(qtd, tentativas = 0){
    try{
        const numeros = []
        for(let _ of Array(qtd).fiil()){
             numeros.push(await gerarNumeroEntre(1,100, numeros))
        }
        return numeros
    }catch(e){
       if(tentativas > 60){
           console.log(tentativas)
           throw "ERRADO"
       }else{
           gerarMegaSena(qtd,tentativas+1)
       }
    }
}


gerarMegaSena(1,60)
.then(console.log)
.catch(console.log)