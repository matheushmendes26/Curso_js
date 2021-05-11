const quaseArray = {
    0: 'Rafa',
    1:'Ana',
    2:'Dala'
}

console.log(typeof quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function(){
        return Object.values(this)
    },
})

const meuArray = ['Rafa','Ana','Dala']
console.log(quaseArray.toString(),meuArray)
