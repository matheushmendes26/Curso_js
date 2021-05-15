const funcaoDaSorte = function(num){
    let num2 = Math.floor(Math.random()*10)
    if(num==num2){
        console.log(`Parabéns! O número sorteado foi o ${num2}`)

    }else{

        console.log(`Que pena! O número sorteado foi o ${num2}`)

    }

}

funcaoDaSorte(6)