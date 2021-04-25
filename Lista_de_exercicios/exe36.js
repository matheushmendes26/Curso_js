const Fun1 = function(vet, num)
{
    for(let i = 0;i<vet.length;i++)
    {
        vet[i] = vet[i]*num
    }
    return vet
}

const Fun2 = function(vet, num)
{
    for(let i = 0;i<vet.length;i++)
    {
        if(vet[i]%5==0){
          vet[i] = vet[i]*num  
        }
        
    }
    return vet
}