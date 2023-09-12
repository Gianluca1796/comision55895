//Condicionales
// let respuesta = prompt("Te gustaria salir conmigo? :)")

// if(respuesta == "si"){
//     alert("Voy a ir al cine con ella :)")
// }

// if(respuesta == "no"){
//     alert("Diosito te robo oxigeno, llevame please ;(")
// }

// let tiempo = prompt("como esta el tiempo?");

// if(tiempo == "lluvioso"){
//     alert("sale un guisito!!");
// }

// if(tiempo == "soleado"){
//     alert("sale un asadito!!")
// }

// let producto = prompt("Bienvenido a la verduleria, que desea?")
// if(producto == ""  || !isNaN(producto)){
//     alert("No ingreso ningun producto")
// }else{
//     alert("Usted selecciono: " + producto)
// }
//Operadores 
//Operador ===, nos indica que dos valores son estrictamente iguales tanto en valor como tipo de dato
// let x = 5;
// let y = "5";

// let resultado = (x === y);

// console.log(resultado);
// let a = "Hola";
// let b = "8";
// let resultado1 = (a === b);
// console.log(resultado1)

// let sonDiferentes = (x != y);
// console.log(sonDiferentes)
// let sonEstrictamenteDiferentes = (x !== y);
// console.log(sonEstrictamenteDiferentes)

// let num1 = parseInt(prompt("introduzca un numero"));
// let num2 = parseInt(prompt("introduzca el segundo numero"));

// if(num1 > num2){
//     alert("el numero mayor es: " + num1)
// }else if(num1 == num2 ){
//     alert("ambos numeros son iguales")
// }else{
//     alert("el numero mayor es " + num2)
// }

//Busqueda laboral utilizando operadores  || y &&
// let experiencia = parseInt(prompt("¿Cuántos años de experiencia tienes?"));
// let certificaciones = prompt("posee certificaciones?");

// if (experiencia >= 3 || certificaciones == "si") {
//     alert("¡Felicidades! Cumples con los requisitos.");
// } else {
//     alert("Lo sentimos, no cumples con los requisitos para este puesto.");
// }

// let vacaciones = prompt("El trabajo proporciona vacaciones?");
// let salario = parseInt(prompt("cuanto es el salario"));

// if((salario >= 2000) && vacaciones == "si"){
//     alert("acepto el trabajo")
// }else{
//     alert("No acepto el trabajo,bye!!")
// }

// let tomate = 600;
// let lechuga = 400;
// let precio = 0;
// let total=0;
// let stock = 20;
// if(producto == ""){
//     alert("no ingreso un producto")
// }else if(producto == "tomate"){
//     precio = tomate;
// }else{
//     precio = lechuga;
// }

// let cantidad = parseInt(prompt("introduzca la cantidad del " + producto));
//     if((cantidad < 0) ||(cantidad >20)){
//         alert("introduzca una cantidad valida")
//     }else{
//         total = cantidad * precio;
//         alert("Usted compro: " + cantidad + " de " + producto  + " siendo un total de: " + total)
//     }

// let mensaje = "";
// if(total > 5000){
//     mensaje = alert("esta muy caro nos vimos!!")
// }else{
//     mensaje = alert("me lo llevo")
// }


//Crea un login, en donde se pidan solamente el nombre de usuario  y el password.
//Utilizar condicionales necesarios para hacer la verificaciones, en caso de que algun dato sea incorrecto, mostrar por  un alert el acceso denegado
//En caso de que los datos coincidan darle la bienvenida  utilizando el nombre del usuario.
//Recordar que ningun campo puede estar vacio

