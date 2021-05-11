//Array é na verdade um objeto em JavaScript
//Uma boa prática de programação diz que um array deve ser homogêneo

console.log(typeof Array, typeof new Array, typeof [])

let aprovados  = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']

aprovados[3] = 'Paulo'
aprovados.push('Ella')
console.log(aprovados.length)

aprovados[9] = 'Rodrigo'
console.log(aprovados[8]=== undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados[0],aprovados[1])

aprovados.splice(1,1,'Lala','Teté')
console.log(aprovados)
