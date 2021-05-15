function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
    const chave = 0,
    valor = 1
    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
    return objetoInvertido
    }
    

console.log(inverter({1:'A',2:'B',3:'C'}))