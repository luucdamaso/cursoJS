//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não podemos começar o nome de uma contantes com um número
//não podem conter espaços ou traços
//Ultilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO ULTILIZE VAR, UTILIZE CONST.
//String = Text | Number = Número

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof(primeiroNumero + segundoNumero))