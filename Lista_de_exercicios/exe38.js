const Impar = function(inicio, fim)
{
    if(inicio>fim)
    {
        for(let i = fim+1;i<inicio-fim;i++){

            if(i%2!=0)
            {
                console.log(i)
            }
        }

    }else{

        for(let j= inicio+1;j<fim-inicio;j++){

            if(j%2!=0)
            {
                console.log(j)
            }
        }
    }
    
}

Impar(2,31)