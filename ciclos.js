//Ciclo for

//Escribir por consola una serie de numeros ordenados de forma ascendente
// for(let i = 0; i<= 10;i++){
//     console.log(i)
// }
//Escribir por consola una seria de numeros ordenados de forma descendente
// for(let i = 10;i>0; i--){
//     console.log(i)
// }
//Si tengo mas de un numero para sumar podria aplicar un ciclo for
// let suma =0;
// let numeros = parseInt(prompt("cuantos numeros quiere sumar"))
// for(let i = 0; i< numeros;i++){
//     let num = parseInt(prompt("introduzca el numero"))
//     suma += num;
// }
// console.log(suma)

//Ciclo while
//Si adivinan mi edad ganan !!

// let edad = 29;

// let respuestaUsuario = parseInt(prompt("Cual es mi edad?"))
// while(respuestaUsuario != 29){
//  alert("Error intenta de nuevo");
//     respuestaUsuario = parseInt(prompt("Cual es mi edad?"))
// }

// alert("Ganaste!!")

// let suma = 0;
// let cantidad = 0;
// while (true) {
//     let numero = parseInt(prompt("Ingrese un número (ingrese un número negativo para terminar):"));   
//     // Verificamos si el número ingresado es negativo para salir del ciclo
//     if (numero < 0) {
//         break;
//     }
//     // Sumamos el número ingresado a la suma acumulada
//     suma += numero;
//     cantidad += 1;
// }

// alert("Se ingresaron " + cantidad + " numeros y su suma total es de: " + suma);

//Ciclo do while
//El ciclo do while a diferencia del while, siempre va  a permitir hacer algo independientemente si la condicion permite entrar al while, por lo menos una vez

// let numero1;

// do {
//   numero1 = parseInt(prompt("Ingrese un número positivo:"));
// } while (isNaN(numero1) || numero1 <= 0);

// alert("¡Número válido ingresado: " + numero1 + "!");

let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio del 1 al 10
let intentos = 0;
let adivinanza;

do {
  adivinanza = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
  intentos++;

  if (adivinanza === numeroAleatorio) {
    alert(`¡Correcto! Has adivinado el número en ${intentos} intentos.`);
  } else {
    alert("Incorrecto. ¡Sigue intentando!");
  }
} while (adivinanza !== numeroAleatorio);