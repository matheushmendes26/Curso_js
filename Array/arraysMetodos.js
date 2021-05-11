const pilotos = ['v','A','R','M']
pilotos.pop()
console.log(pilotos)

//Adciona na última posição
pilotos.push('VV')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('H')
console.log(pilotos)//Adciona na primeira posição

pilotos.splice(2,1,'T','N')
console.log(pilotos)
//Remove e adiciona em posição especificada

novo_array  = pilotos.slice(2)//novo array a partir da posicao especificada
console.log(novo_array)


