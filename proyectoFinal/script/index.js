let inputRecomendation = document.getElementById("inputRecomendation").value;
let newRecomendation = document.getElementById("newRecommendation");
let buttonEnviar = document.getElementById("submitButton");
let recomendaciones = document.getElementById("contentRecomendation");
let message = document.getElementById("message");
let closeModal = document.getElementById("modal-body");
let buttonClose = document.getElementById("button_ok");

buttonEnviar.addEventListener("click", createNewRecomendation);
buttonClose.addEventListener("click", hideModal);

function createNewRecomendation() {
  console.log("Estas haciend click");
  if (newRecomendation.value !== "") {
    const pElement = document.createElement("p");
    pElement.innerText = newRecomendation.value;
    const contentElement = document.createElement("div");
    contentElement.classList.add("pa_description");
    contentElement.appendChild(pElement);
    recomendaciones.appendChild(contentElement);
    newRecomendation.value = "";
    showMesagge();
  } else {
    alert("por favor ingrese uan recomendacion antes de dar click");
  }
}

function showMesagge() {
  closeModal.classList.add("show_modal");
}

function hideModal() {
  closeModal.classList.remove("show_modal");
}
