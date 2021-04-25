const PedidoRestaurante = function(codigo, qtd)
{
    switch (codigo){
        case 100:
            console.log("Valor a pagar é de", qtd*3)
            break
        case 200:
            console.log("Valor a pagar é de", qtd*4)
            break
        case 300:
            console.log("Valor a pagar é de", qtd*5,5)
            break           
        case 400:
            console.log("Valor a pagar é de", qtd*7,5)
            break
        case 500:
            console.log("Valor a pagar é de", qtd*2,8)
            break
        default:
            console.log("Código inválido")
    }
}