const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

const enviarCorreo = document.getElementById('enviarCorreo');

enviarCorreo.addEventListener('click', function(){
  alert("El correo fue enviado correctamente...")
})

const textoRojito = document.getElementById('ingredientes');
textoRojito.addEventListener('dblclick', function(){
  textoRojito.className = "cambio-color-a-rojito"
});
const textoRojitoDos = document.getElementById('preparacion');
textoRojitoDos.addEventListener('dblclick', function(){
  textoRojitoDos.className = "cambio-color-a-rojito"
});