//Funcao Factory   retorna objetos

function criarPessoa(nome,idade){
    return{
        nome,
        idade,
        desconto: 0.1
    }

}

console.log(criarPessoa('Ana',45))