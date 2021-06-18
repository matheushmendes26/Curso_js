function gerarNumeroEntre(min, max, tempo){
    if(min>max){
        [max, min] = [min, max]
    }

    return new Promise(resolve=>{
        setTimeout(function(){
            const fator = max-min +1
            const aleatorio  = parseInt(Math.random() * fator) + min
            resolve(aleatorio)

        }, tempo)

    })

}

function gerarVariosnumeros(){

    return Promise.all ([
        gerarNumeroEntre(1,100,5000),
        gerarNumeroEntre(1,100,100),
        gerarNumeroEntre(1,100,1500),
        gerarNumeroEntre(1,100,4000),
        gerarNumeroEntre(1,100,1000),
        gerarNumeroEntre(1,100,3000)
    ])
}


console.time('promise')
gerarVariosnumeros()
.then(numeros => console.log(numeros))
.then(()=>{
    console.timeEnd('promise')
})