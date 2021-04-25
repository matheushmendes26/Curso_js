function queDia(dia)
{
    switch(dia)
    {
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break
        case 1: case 7:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')

    }
}

queDia(5)
queDia(1)
queDia(30)
