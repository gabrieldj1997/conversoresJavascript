let conversor = (str) => {
    let original = str;
    let hexadem = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }
    let sobra = [];
    while(1) {
        let numero = str % 16;
        sobra.push(hexadem[numero] || numero);
        str = Math.floor(str/16);
        if(str <= 16)
            break;
    } 
        
    if(original > 16)
        sobra.push(str);

    return sobra.reverse().join("");
}
let number = conversor(410);
//console.log(number);
let number2 = conversor(458);
console.log(number2);