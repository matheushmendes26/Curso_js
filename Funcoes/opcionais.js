function area(altura, largura){
    const area = altura*largura
    if(area>=20)
    {
        console.log('Area maior que o permitido', area,'m2')
    }else{
        return area
    }
    }

    console.log(area(2,2))
    console.log(area(2))
    console.log(area())
    console.log(area(2,3,4,5,6))
    console.log(area(6,6))

