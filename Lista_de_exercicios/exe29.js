const VerificaIntervalo = function(vet)
{
    let dentro = 0
    let fora = 0
    for(let i = 0;i<vet.length;i++)
    {
        if(vet[i]>=10&&vet[i]<=20)
        {
            dentro++
        }else{
            fora++
        }
    }
    console.log("Existe", dentro, "número(s) dentro do intervalo e ",fora,"fora dele")
}

vetor = [13,3,4,55,4,3,3,4,555,4,45,4,3,34,4,3,3,4]
VerificaIntervalo(vetor)