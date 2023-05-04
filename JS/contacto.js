const entradas = document.querySelectorAll("#mi-boton");
const inputs = document.querySelectorAll('input');
const mensaje = document.querySelector('textarea');
const formulario = document.querySelector('#mi-formulario');


entradas[0].addEventListener('click', respuestaClick1);
entradas[1].addEventListener('click', respuestaClick2);

const formnombre = inputs[0];
const correo = inputs[1];
const telefono = inputs[2];

formnombre.addEventListener('keyup', () => {
  console.log(inputs[0].value);
});

correo.addEventListener('keyup', () => {
  console.log(inputs[1].value);
});

telefono.addEventListener('keyup', () => {
  console.log(inputs[2].value);
});

mensaje.addEventListener('keyup', () => {
  console.log(mensaje.value);
});

const boton = document.querySelector('#mi-boton');

function respuestaClick1() {
  console.log("Su mensaje ha sido enviado");
  event.preventDefault();
  localStorage.setItem('nombre y apellido', formnombre.value);
  localStorage.setItem('correo', correo.value);
  localStorage.setItem('teléfono', telefono.value);
  localStorage.setItem('mensaje', mensaje.value);
  Swal.fire({
    title: 'mensaje enviado',
    timer: 3000,
    timerProgressBar: true,
  });
formnombre.value = "";
correo.value = "";
telefono.value = "";
mensaje.value = "";
Swal.fire({
title: 'mensaje enviado',
timer: 3000,
timerProgressBar: true,
});
}

// Boton borrar datos
function respuestaClick2() {
  console.log("Usuario borró los datos");
  Swal.fire({
    title: 'Ha borrado sus datos',
    timer: 3000,
    timerProgressBar: true,
  });
}