//estrategia 1 para gerar valor padrao
function soma(a,b,c){
    a = a||1
    b= b||1
    c = c||1
    return a+b+c
}

console.log(soma(),soma(2),soma(1,2,3),soma(0,0,0))

//estrategia 2, 3 e 4 para gerar valor padrao

function soma2(a,b, c){
   a = a !== undefined ? a: 1
   b = 1 in arguments ? b:1
   c= isNaN(c) ? 1: c
   return a+ b+ c
}

console.log(soma2())
console.log(soma2(1,2))
console.log(soma2(1,2,3))
console.log(soma2('a','b','c'))
console.log(soma(1,3,'teste'))

function soma3(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma3(1,2,3),soma3(2,3,4,),soma3(0,0,0),soma3(0))
