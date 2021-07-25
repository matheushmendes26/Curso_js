const colors = {
    p: '#000',
    div: '#BF0',
    selection: '#f0403a',
    ul: '#111345',
    ol: '#555fff',
    padrao: '#ada',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
        }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})
