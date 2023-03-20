let n1 = 1
let string1 = '1'
    if (n1 == string1) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
     console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
     }
  
let n10 = 10
let string10 = '10'
    if (n10 === string10) { // serie de condições para validar o tipo das strings
        console.log('As variáveis numerodez e string10 tem o mesmo valor e mesmo tipo')
    } else if (n10 == string10) {
        console.log('As variáveis numerodez e string10 tem o mesmo valor, mas tipos diferentes')
    } else if (typeof n10 == typeof string10) { // typeoff retorna o tipo da variavel
        console.log('As variáveis numerodez e string10 tem o mesmo tipo, mas valores diferentes')
    } else {
        console.log('As variáveis numerodez e string10 não tem o mesmo tipo, nem o mesmo valor')
}
