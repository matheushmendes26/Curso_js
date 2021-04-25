//Armazenando uma funcaco numa variavel
const imprimirSoma = function(a,b)
{
    console.log(a+b)
}

imprimirSoma(112,122)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b)=>{
    return a+b
}
console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b)=>a-b
console.log(subtracao(2,3))
