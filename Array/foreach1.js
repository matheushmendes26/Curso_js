const aprovados = ['Ana','Bia','Carla']

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

i = aprovados.length

for(let i = 0; i< aprovados.length;i++){

    console.log(`${i+1}) ${aprovados[i]}`)

}