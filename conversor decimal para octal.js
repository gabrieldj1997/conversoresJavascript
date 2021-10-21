
let conversor = (str) => {
    let sobra = []
    while(1) {
        sobra.push(str%8);
        str = Math.floor(str / 8);
        if(str <= 8)
            break;
    } 
    sobra.push(str);
    return sobra.reverse().join("");
}

let number = conversor(30);
console.log(number);