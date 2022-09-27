let letrasUsadas;
let letraSelecionada = [];
let palabraRandom = [];
let intentos = 0;
let letraacertada;
let arrayPalabras = [
 "CARRO",
 "MOTO",
 "AVION",
 "CARRERA",
 "DIVERCION",
 "COCODRILO",
 "ESPEJO",
 "PORTATIL",
 "ESTUDIAR",
 "VALIENTE",
 "JAVASCRIPT",
];

//!parte del juego
function iniciarJuego() {
 letrasUsadas = [];
 letraacertada = 0;
 intentos = 0;
 const inicio = document.getElementById("inicio");
 const juego = document.getElementById("juego");
 inicio.classList.remove("section-inicio");
 inicio.classList.add("ocultar");
 juego.classList.remove("ocultar");
 juego.classList.add("section-jugo");
 document.addEventListener("keydown", tecladoLetra);
 dibujarMuneco();
 dibujarletra();
}


/*dibuja la letra en el DOM */
function dibujarletra() {
 let correctas = document.getElementById("letras-correctas");
 palabraRandom = palabraSecreta();
 console.log(palabraRandom);
 for (let i = 0; i < palabraRandom.length; i++) {
  const letra = document.createElement('div');
  letra.id = "letras-palabra";
  letra.classList.add('letras-correctas');
  letra.textContent = palabraRandom[i];
  letra.classList.add('letra-oculta');
  correctas.appendChild(letra);
 }
}


/*selecciona una palabra al azar del array */
function palabraSecreta() {
 let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].split("");
 return palabra;
}



function tecladoLetra(event) {
 let letraNueva = event.key.toUpperCase();
  if (letraNueva.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraNueva)) {
   letraIngresada(letraNueva);
   console.log("precionaste: " + letraNueva);
 } else {
  console.log("no es una tecla valida");
 };
}


 function letraIngresada(letra) {
  /* const arr = Array.from(document.querySelectorAll('#letras-palabra')); */
 letraSelecionada = document.querySelectorAll('#letras-palabra');
 for (let i = 0; i < letraSelecionada.length; i++) {
  if (letraSelecionada[i].innerHTML === letra) {
   letraSelecionada[i].classList.remove('letra-oculta');
   console.log("verdadero");
  } else {
   console.log("perdiste un intento");
   /* document.getElementById("letras-malas").innerHTML = "errrrrrroooooo!";  */
  }
 }
}

function correcta(letra) {

}



//?parte de canvas
function dibujarMuneco() {
 let pantalla = document.getElementById("canvas");
 let pincel = pantalla.getContext("2d");
 intentos = 0;
 if (intentos === 0) {
  pincel.beginPath();
  pincel.fillRect(0, 395, 500, 5);
  pincel.fillRect(100, 90, 5, 500);
  pincel.fill();
 }

 if (intentos === 1) {
  pincel.beginPath();
  pincel.fillRect(100, 90, 150, 5);
  pincel.fill();
 }
 if (intentos === 2) {
  pincel.beginPath();
  pincel.fillRect(245, 90, 5, 40);
  pincel.fill();
 }
 if (intentos === 3) {
  pincel.beginPath();
  pincel.arc(248, 155, 25, 0, 2 * 3.14);
  pincel.fill();
 }
 if (intentos === 4) {
  pincel.beginPath();
  pincel.fillRect(245, 180, 5, 80);
  pincel.fill();
 }
 if (intentos === 5) {
  pincel.moveTo(200, 210);
  pincel.lineTo(250, 185);
  pincel.lineWidth = 5;
 }
 if (intentos === 6) {
  pincel.moveTo(300, 210);
  pincel.lineTo(250, 187);
  pincel.lineWidth = 5;
 }
 if (intentos === 7) {
  pincel.moveTo(200, 310);
  pincel.lineTo(250, 255);
  pincel.lineWidth = 5;
 }
 if (intentos === 8) {
  pincel.moveTo(300, 310);
  pincel.lineTo(250, 257);
  pincel.lineWidth = 5;
 }
 pincel.stroke();
}



//TODO parte de agregar palabra
function agregarPalabra() {
 const inicio = document.getElementById("inicio");
 const agregar = document.getElementById("section-palabra");
 inicio.classList.remove("section-inicio");
 inicio.classList.add("ocultar");
 agregar.classList.remove("ocultar");
 agregar.classList.add("section-palabra");
}

function cancelar() {
 const inicio = document.getElementById("inicio");
 const agregar = document.getElementById("section-palabra");
 inicio.classList.remove("ocultar");
 inicio.classList.add("section-inicio");
 agregar.classList.remove("section-palabra");
 agregar.classList.add("ocultar");
}


function guardarPalabra() {
 let textinput = document.getElementById("palabra").value.toUpperCase();

}