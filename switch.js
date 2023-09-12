let tipoPokemon = prompt("Ingrese el tipo de Pokémon (Fuego, Agua, Planta, Eléctrico, o Hielo):");

switch (tipoPokemon.toLowerCase()) {
  case "fuego":
    console.log("Charizard es un Pokémon de tipo Fuego.");
    break;
  case "agua":
    console.log("Squirtle es un Pokémon de tipo Agua.");
    break;
  case "planta":
    console.log("Bulbasaur es un Pokémon de tipo Planta.");
    break;
  case "eléctrico":
    console.log("Pikachu es un Pokémon de tipo Eléctrico.");
    break;
  case "hielo":
    console.log("Lapras es un Pokémon de tipo Hielo.");
    break;
  default:
    console.log("No se reconoce ese tipo de Pokémon.");
    break;
}
// Comedor laboral
let diaSemana = prompt("Ingrese el día de la semana (Lunes a Viernes):");
let menu;

switch (diaSemana.toLowerCase()) {
  case "lunes":
    menu = "Pollo con  ensalada";
    break;
  case "martes":
    menu = "Pasta con salsa de tomate y albóndigas";
    break;
  case "miércoles":
    menu = "Sándwich de atun con papas fritas";
    break;
  case "jueves":
    menu = "Ensalada César con pollo a la parrilla";
    break;
  case "viernes":
    menu = "Pizza de pepperoni y ensalada";
    break;
  default:
    menu = "No hay menú disponible para ese día.";
    break;
}

alert(`Menú del ${diaSemana}: ${menu}`);
//Ejemplo de planificaicon de viajes
let presupuesto = parseInt(prompt("Introduzca su presupuesto"))
let mensaje;
switch(true){
    case presupuesto >= 5000:
        mensaje = alert("Puedes irte un mes a japon")
        break;
    case presupuesto >= 3000 &&  presupuesto < 5000:
        mensaje = alert("Puedes irte un mes a Estados Unidos")
        break;
    case presupuesto >= 2000 && presupuesto < 3000:
        mensaje = alert("Puedes irte un mes Brasil")
        break;
    case presupuesto >= 1000 && presupuesto<2000:
        mensaje = alert("Puedes irte un mes a Cordoba")
        break;
    default:
        mensaje = alert("Armate la pelopincho nomas !!")
        break;
}