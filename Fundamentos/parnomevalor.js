//par nome valor

const saudacao ='Opa' //contexto léxico 1
function exec(){
    const saudacao = 'Blalala' //contexto léxico 2
    return saudacao 
}

//Objetos sao grupos animados de pares nome/valor
const cliente ={
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'Rua A', 
        nuemro: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)