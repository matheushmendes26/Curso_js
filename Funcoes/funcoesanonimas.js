const soma = function(a,b){ return a+b}
const Imprimir = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

Imprimir(3,4)
Imprimir(2,2,soma)
Imprimir(4,5,function(x,y){return x-y})

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()