// Ámbito global
var globalVar = "Soy una variable global";
let globalLet = "También soy global, pero con ámbito de let";
const globalConst = "Soy una constante global";

{
  // Ámbito de bloque
  var blockVar = "Soy un var con ámbito de bloque";
  let blockLet = "Soy un let con ámbito de bloque";
  const blockConst = "Soy un const con ámbito de bloque";
  console.log(blockLet);
}

//Block Scope
console.log(blockVar);

function show() {
  var functionVar = "Soy una var con alcance de bloque";
  let functionLet = "Soy un let con alcance de bloque";
  const functionConst = "Soy un const con alcance de bloque";
}
show();

console.log(functionVar); // Lanza ReferenceError
console.log(functionLet); // Lanza ReferenceError
console.log(functionConst); // Lanza ReferenceError