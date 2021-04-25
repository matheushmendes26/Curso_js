const Media = function(vet){
    let Soma = 0
    let Media = 0
    for(let i = 0;i<vet.length;i++)
    {
        Soma = Soma + vet[i]
    }
    Media = Soma/vet.length
    console.log(Media)
}

vetor = [12,8,11,10,9,10,12,9]
Media(vetor)