//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas à funcao

//Contexto léxico em ação 

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro

}

const minha = fora()
console.log(minha())