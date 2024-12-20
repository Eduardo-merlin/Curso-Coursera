let count = 0;

function increaseCount() {
  count++; //incrementa el conteo en 1
  displayCount(); // Muestra el conteo
  checkCountValue(); // Verifica el valor del count y muestra un mensaje
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count; //Muestra el conteo en el html
}

function checkCountValue() {
  if (count === 10) {
    alert("¡Tu publicacion de instagram gano 10 seguidores! ¡Felicidades!");
  } else if (count === 20) {
    alert("¡Tu publicacion de instagram gano 20 seguidores! ¡Sigue así!");
  }
}
