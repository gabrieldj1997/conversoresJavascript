//DECIMAL PARA BINARIO
let conversor = (str) => {
    let sobra = []
    while(true) {
        sobra.push(str%2)
        str = Math.floor(str/2)
        if(str == 1)
            break
    }
    sobra.push(str)
    return sobra.reverse().join('')
}

let number = conversor(4875)
console.log(number)
