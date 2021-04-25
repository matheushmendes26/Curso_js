const valores = [1,2,3,4,5,6,7,6]
console.log(valores[3])
console.log(valores[9])
valores[2] = 444

console.log(valores)
console.log(valores.length)

valores.push({id:3},false,null,'teste')
console.log(valores)

console.log(valores.pop)
delete valores[0]
console.log(valores)
console.log(typeof valores)


