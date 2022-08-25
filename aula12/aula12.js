let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
/*
const VarATemp = varA;
varA = varB;
varB = varC;
varC = VarATemp;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);