/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
*/
/* É POSSÍVEL MUDAR A ORIGEM DA COPIAM POREM ISSO NÃO ALTERA QUEM A RECEBEU
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a.b);
*/

_________________________________________________________________________

/*Refêrencia (mutável) - array, object, function - Passados por referência
*/
/*A, B APONTAM PARA O MESMO LUGAR, SENDO ASSIM QUANDO VOCÊ MUDA UM, AUTOMATICAMENTE ESTA MUDANDO O OUTRO.
let a = [1, 2, 3];
let b = a; // let b = [...a] **Nesse caso estou somente copiando os dados de a, então b, passa a ser independente.
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
*/