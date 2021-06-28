function esperarPor(tempo =2000){
    return new Promise(function(resolve){
        setTimeout(()=>{ console.log('Executando promise')
        resolve()
    },tempo)
    })
}

function retornarValor(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(10),5000)
    })
}
async function executar(){
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`...${valor}`)

    await esperarPor(2000)
    console.log(`...${valor+1}`)
    

    await esperarPor(2000)
    console.log(`...${valor+2}`)

    return valor+3
    

}


executar().then(console.log)
