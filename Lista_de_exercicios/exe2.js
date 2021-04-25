function triangulo(a,b,c){
    if(a==b&&b==c)
    {
        console.log('Triângulo equilátero')

    }else if(a==b||b==c||c==a)
    {
        console.log('Triãngulo Isóceles')

    }else{
        console.log("Triângulo Escaleno")
    }
}

triangulo(2,2,2)
triangulo(2,3,2)
triangulo(2,2,4)
triangulo(7,4,2)
triangulo(5,2,2)
