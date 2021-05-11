/*const forEach2 = function(funcao, param1, param2){

    for(let i = 0; i < funcao.length; i++){

    }

} Minha tentativa de criar um ForEach */

Array.prototype.forEach2 = function(callback){

    for(let i = 0; i< this.length; i++){
        callback(this[i],i,this)
    }

}


const aprovados = ['Ana','Bia','Carla']

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach2(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})