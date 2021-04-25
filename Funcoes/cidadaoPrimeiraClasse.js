//Atribuição comum
 function fun1(){}

 // Funcao em uma variavel

 const fun2 = function(){}

 // funcao dentro de um array

 const a  = [fun1, fun2, function fun3(a,b){return a, b}]

 // funcao como atributo de um objeto

 const K = {}
  K.falar = function(){return 'Lala'}
// funcao como parametro duma outra funcao

const int = function(fun1){
    fun1()
}
// funcao dentro de funcoes
function Soma(a, b){
    return function Soma2(c){
        return  function Soma3(){
            return 0
        }
    }
}
