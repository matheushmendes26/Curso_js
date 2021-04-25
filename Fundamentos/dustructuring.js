// novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        Rua: 'A',
        Numero: 23
    }
}
 const {nome, idade} = pessoa
console.log(nome,idade)

const{nome:n, idade:i} = pessoa
console.log(n,i)

const{sobrenome, bem= true} = pessoa
console.log(sobrenome,bem)

const{ endereco:{Rua,Numero, cep}} = pessoa
console.log(Rua,Numero,cep)

