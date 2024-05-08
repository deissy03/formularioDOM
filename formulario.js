'use strict';

/* DOM elements */
const registroForm = document.getElementById('registro');
const nombreIngresado = document.getElementById('nombre');
const fechaIngresada = document.getElementById('fecha');
const edadIngresada = document.getElementById('edad');
const correoIngresado = document.getElementById('correo');
const contrasenaIngresada = document.getElementById('contrasena');
const confirmacionIngresada = document.getElementById('confirmacion');
const mensajeIngresado = document.getElementById('mensaje');
const nombreValidacion = document.getElementById('nombreValidacion');
const fechaValidacion = document.getElementById('fechaValidacion');
const edadValidacion = document.getElementById('edadValidacion');
const correoValidacion = document.getElementById('correoValidacion');
const contrasenaValidacion = document.getElementById('contrasenaValidacion');
const confirmacionValidacion = document.getElementById('confirmacionValidacion');


/* Validation functions */
function nombreValidado(name) {

  const regExp = /^[a-zA-Z\s]*$/;
  if (name.trim() === '') {
    nombreValidacion.textContent = 'Por favor ingrese su nombre.';
    return false;
  }else if (!regExp.test(name)) {
    nombreValidacion.textContent = 'El nombre no puede contener numeros ni caracteres especiales.';
    return false;
  }
  nombreValidacion.textContent = '';
  return true;
  }
 
function fechaValidada(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  if (birthDate > today) {
    fechaValidacion.textContent = 'No puede ingresar una fecha futura.';
    return false;
  }/*else  if (birthDate <='2005-12-31') {
    fechaValidacion.textContent = 'nnnnnnnnnnnnnn';
    return false;
  }*/
  fechaValidacion.textContent = '';
  return true;
}

function edadValidada(age) {
  if (isNaN(age ) ) {
    edadValidacion.textContent = 'la edad no puede contener letras';
    return false;
  }else  if ( age<18) {
    edadValidacion.textContent = 'No se puede registrar por que es menor de edad';
    return false;
  }else  if ( age>100) {
    edadValidacion.textContent = 'la edad no puede superar los 100 años';
    return false;
  }
  edadValidacion.textContent = '';
  return true;
}

function correoValidado(email) {
  const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === '') {
    correoValidacion.textContent = 'Por favor ingrese su correo electronico.';
    return false;
  } else if (!regExp.test(email)) {
    correoValidacion.textContent = 'Por favor ingrese un correo valido.';
    return false;
  }
  correoValidacion.textContent = '';
  return true;
}

function contrasenaValidada(password) {
  const regExp = /^[a-zA-Z0-9]{8,}$/;
  if (password.trim() === '') {
    contrasenaValidacion.textContent = 'Por favor ingrese su contraseña.';
    return false;
  }else if (!regExp.test(password)) {
    contrasenaValidacion.textContent = 'La contraseña debe ser mayor a 8 caracteres.';
    return false;
  }
  contrasenaValidacion.textContent = '';
  return true;
}

function confirmacionValidada(password, passwordConfirm) {
  if (password !== passwordConfirm) {
    confirmacionValidacion.textContent = "Su contraseña no coincide con la ingresada anteriormente.";
    return false;
  }
  confirmacionValidacion.textContent = '';
  return true;
}

/* Event Listeners */
function addEventListeners() {
  registroForm.addEventListener('submit', handleSubmit);
  nombreIngresado.addEventListener('input', () => nombreValidado(nombreIngresado.value));
  fechaIngresada.addEventListener('input', () => fechaValidada(fechaIngresada.value));
  edadIngresada.addEventListener('input', () => edadValidada(edadIngresada.value));
  correoIngresado.addEventListener('input', () => correoValidado(correoIngresado.value));
  contrasenaIngresada.addEventListener('input', () => contrasenaValidada(contrasenaIngresada.value));
  confirmacionIngresada.addEventListener('input', () => confirmacionValidada(contrasenaIngresada.value, confirmacionIngresada.value));
  
}

/* Form submission handler */
function handleSubmit(event) {
  event.preventDefault(); 

  if (
    nombreValidado(nombreIngresado.value) &&
    fechaValidada(fechaIngresada.value) &&
    edadValidada(edadIngresada.value) &&
    correoValidado(correoIngresado.value) &&
    contrasenaValidada(contrasenaIngresada.value) &&
    confirmacionValidada(contrasenaIngresada.value, confirmacionIngresada.value)
  ) {
    const submittedData = {
      name: nombreIngresado.value,
      dateOfBirth: fechaIngresada.value,
      age: edadIngresada.value,
      email: correoIngresado.value,
      password: contrasenaIngresada.value,
      passwordConfirm: confirmacionIngresada.value,
      message: mensajeIngresado.value,
    };
    
    console.log('Puede subir la informacion:', submittedData);
    const datosCompletos = JSON.stringify (submittedData);

    console.log ( datosCompletos); 
      registroForm.reset();
    //window.location.href ='http://127.0.0.1:5500/private.html';
  } else {
   console.log('Por favor verifique los errores no recibi informacion.');
  }
}

 addEventListeners();
