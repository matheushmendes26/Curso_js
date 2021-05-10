const a = 1
const b = 2
const c = 3

const obj1 = {a:a,b:b,c:c}
const obj2 = {a,b,c}
console.log(obj1)
console.log(obj2)

const nomeAtri = 'nota'
const valorAtri = '8.67'

const obj3 = {}
obj3[nomeAtri] = valorAtri
console.log(obj3)
const obj4 = {[nomeAtri]: valorAtri}
console.log(obj4)

const obj5 = {
    funcao1: function(){

    },
    funcao2(){

    }
}

console.log(obj5)

