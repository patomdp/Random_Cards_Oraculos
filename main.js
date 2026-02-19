/* Agregar un array con los textos de cada carta, dependiendo de cual carta se cargue se renderiza un array */

//var listaDeHechizos = []

var listaDeHechizos = new Array(String);
listaDeHechizos[9] = "<b> Una zanahoria: </b> no hace nada.";
listaDeHechizos[10] =
  "<b>Barriles Explosivos:</b> Elimina hasta 2 personajes de nivel 1 o inferior. De uno o varios oponentes.";
listaDeHechizos[11] =
  "<b>Despojo:</b> Elimina un objeto+2 o dos objetos +1 de uno o varios objetivos.";
listaDeHechizos[12] =
  "<b>Invocador:</b> Busca en el mazo o en el pozo de descarte un personaje nivel 0 y ponlo en tu banca.";
listaDeHechizos[13] =
  "<b>Convertir en piedra:</b> Elimina un personaje nivel 4 o inferior.";
listaDeHechizos[14] =
  "<b>Soborno:</b> Te apropias de un personaje nivel 2 o inferior de otro jugador y lo pones en tu banca. Debe ser de una raza que no poseas.";
listaDeHechizos[15] =
  "<b>Veneno:</b> Elimina un personaje nivel 3 o inferior. No se puede defender.";
listaDeHechizos[16] =
  "<b>Cambio de roles:</b> Un hechicero debe cambiar su habilidad (rol) por otra al azar. No se puede defender.";
listaDeHechizos[17] =
  "<b>Espía:</b> Mira la mano de un oponente, puedes jugar una de sus cartas, sin costo.";
listaDeHechizos[18] =
  "<b>Toque mortal:</b> Elimina un personaje nivel 5 o inferior. No se puede defender.";
listaDeHechizos[19] =
  "<b>Truco Secreto:</b> Roba dos cartas, puedes jugarlas. Finaliza tu turno.";
listaDeHechizos[20] = "test";

// Esta funcion randomiza de una manera diferente
function generatorX10() {
  for (let index = 0; index < 21; index++) {
    var x = Math.floor(Math.random() * 10 + 9);
    document.getElementById("divImage").innerHTML = `
    <img src="images/image-${x}.webp" class="initialCard" >
    `;
    console.log(x);
  }
}

/* Randomiza cartas entre el 9 y 19*/
function randomizer() {
  var x = Math.floor(Math.random() * 10 + 9);
  //setTimeout(1000);
  document.getElementById("divImage").innerHTML = `
    <img src="images/image-${x}.webp" class="initialCard" >
    `;
  console.log("Número random: ", x);
  textFill(x);
}

// Resetea a la carta 0
function reset() {
  //setTimeout(1000);
  const reseted = (document.getElementById("divImage").innerHTML = `
  <img src="images/image-0.webp" class="initialCard" >
  `);
  console.log("Número reseteado a: ", reseted);
  textFillDefault();
}

function textFill(x) {
  document.getElementById(
    "text-container"
  ).innerHTML = `<p>${listaDeHechizos[x]}</p>`;
}

/* <p>Carta generada: ${x}</p><br> */

function textFillDefault() {
  document.getElementById(
    "text-container"
  ).innerHTML = `<p> Presione el botón "Generar carta" para iniciar.</p>`;
}
