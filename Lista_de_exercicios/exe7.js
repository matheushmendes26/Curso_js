function bascara(a,b,c){
    let x1, x2
    let Delta = b**2 - 4*a*c
    if(Delta<0)
    {
        console.log("Delta negativo")

    }else{
        x1 = (-b + Math.sqrt(Delta))/(2*a)
        x2 = (-b - Math.sqrt(Delta))/(2*a)
        return [ x1, x2] 
        }
}

console.log(bascara(1,3,-10))