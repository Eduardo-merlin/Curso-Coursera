let grocery_1;
let grocery_2;
let grocery_3;

function calcularGastoTotal() {
  grocery_1 = parseFloat(document.getElementById("grocery1").value);
  grocery_2 = parseFloat(document.getElementById("grocery2").value);
  grocery_3 = parseFloat(document.getElementById("grocery3").value);

  let resultado = grocery_1 + grocery_2 + grocery_3;

  console.log(resultado);

  document.getElementById(
    "resultado"
  ).innerText = `El monto total de la compra es ${resultado}`;
}
