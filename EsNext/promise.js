function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
            reject('ERRO')
        },segundos*1000)
    } )
}
falarDepoisDe(3,'Ooie vc ta bem?')
.then(outraFrase => console.log(outraFrase))
.catch(e=> console.log(e))