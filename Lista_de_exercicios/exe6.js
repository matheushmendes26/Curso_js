function calculaJuros(C,i,n)
{
    let M
    M = C*((1+i)**n)
    console.log("O montante será de: "+M.toFixed(2))
}

calculaJuros(1000,0.05,15)