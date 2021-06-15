//não aceita repeção//não é indexado

const times = new Set()
times.add('A')
times.add('B')
times.add('C')
times.add('D')
times.add('A')


console.log(times)
console.log(times.size)
console.log(times.has('a'))
console.log(times.has('A'))
times.delete('B')
console.log(times.has('B'))

const nomes = ['Sisi','Lala','Lala','Toto','Clei']
const setname  = new Set(nomes)
console.log(setname)

