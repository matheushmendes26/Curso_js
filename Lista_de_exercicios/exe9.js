function classificacao(nota){
    if(nota<40){
        console.log("Aluno reprovado")
    }else if(nota%5!=0 && (nota-1)%5!=0 && (nota-2)%5!=0){
        while(nota%5!=0)
        {
            nota++
        }
        console.log('Aluno aprovado com', nota,'pontos.')
    }else{
        console.log('Aluno aprovado com', nota,'pontos.')
    }
}

classificacao(33)
classificacao(38)
classificacao(43)
classificacao(77)
classificacao(88)
classificacao(56)
