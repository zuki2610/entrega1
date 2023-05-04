// Definimos las variables que utilizaremos
let nombre;
let edad;
let nombreRepresentante;
let telefonoRepresentante;
let notas = [];

// Creamos una función que simula la llamada telefónica
function llamarTelefono(numero) {
  alert(`Llamando al número ${numero}...`);
}

// Pedimos al usuario que ingrese su nombre y su edad mediante prompts
nombre = prompt("Ingresa tu nombre:");
edad = prompt("Ingresa tu edad:");

// Verificamos si el usuario es menor de edad y, en caso afirmativo, pedimos los datos del representante
if (edad < 18) {
  nombreRepresentante = prompt("Ingresa el nombre de tu representante:");
  telefonoRepresentante = prompt("Ingresa el número de teléfono de tu representante:");
}

// Creamos una función que imprime un mensaje de bienvenida y simula la llamada telefónica si el usuario es menor de edad
function saludar(nombre, edad, nombreRepresentante, telefonoRepresentante) {
  if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. Tu representante es ${nombreRepresentante} y su número de teléfono es ${telefonoRepresentante}.`);
    llamarTelefono(telefonoRepresentante);

    // Si el usuario es menor de edad, no mostramos las notas y terminamos la ejecución del programa
    return;
  } else {
    alert(`Hola ${nombre}, eres mayor de edad. Puedes entrar sin representante.`);
  }
}

// Llamamos a la función para que imprima el mensaje de bienvenida y simule la llamada telefónica si es necesario
saludar(nombre, edad, nombreRepresentante, telefonoRepresentante);

// Utilizamos un ciclo for para imprimir los números del 1 al 5 y simular una llamada telefónica por cada menor de edad ingresado
if (edad < 18) {
  for (let i = 1; i <= edad; i++) {
    llamarTelefono(telefonoRepresentante);
    alert("Representante no autorizó tu entrada, bye.");
    break;
  }
} else {
  alert("¡Bienvenido!");

  // Utilizamos un ciclo for para ingresar las notas de evaluación del usuario
  for (let i = 1; i <= 3; i++) {
    let nota = prompt(`Ingresa la nota de la evaluación ${i}:`);
    notas.push(parseFloat(nota));
  }

  // Calculamos el promedio de las notas y lo mostramos en un mensaje de alerta
  let promedio = notas.reduce((a, b) => a + b) / notas.length;
  alert(`Tu promedio de notas es ${promedio.toFixed(2)}.`);
}
