function funcionaOuNao(valor,chanceErro){
    return new Promise((resolve,reject)=>{
        try{
            if(Math.random()<chanceErro){
                reject('ERRO!!!')
    
    
            }else{
                    resolve(valor)
    
                }
        }catch(e){
            reject(e)
        }

    })
}

funcionaOuNao('Testando',0.9)
.then(console.log)
.catch(err=> console.log(err))