let letrasUsadas = [];
let palabraRandom = [];
let letraSeleccionada = [];
let intentos;
let letraAcertada = 0;
let perdiste;
let vencedor;
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

const correctas = document.getElementById("letras-correctas");
const incorrectas = document.getElementById("letras-incorrectas");
const perdido = document.getElementById("perdido-container");

const ganado = document.getElementById("ganado-container");
const pantalla = document.getElementById("canvas");
const pincel = pantalla.getContext("2d");
//!parte del juego
function iniciarJuego() {
 const inicio = document.getElementById("inicio");
 const juego = document.getElementById("juego");
 inicio.classList.remove("section-inicio");
 inicio.classList.add("ocultar");
 juego.classList.remove("ocultar");
 juego.classList.add("section-juego");
 intentos = 0;
 perdiste = false;
 vencedor = false;
 /* usedLettersElement.innerHTML = ''; */
 document.addEventListener("keydown", tecladoLetra);
 dibujarMuneco();
 dibujarletra();
};



/*dibuja la letra en el DOM */
function dibujarletra() {
 palabraRandom = palabraSecreta();
 console.log(palabraRandom);
 for (let i = 0; i < palabraRandom.length; i++) {
  const letra = document.createElement('span');
  letra.id = "letras-palabra";
  letra.innerHTML = palabraRandom[i];
  letra.classList.add('letras-correctas');
  letra.classList.add('letra-oculta');
  correctas.appendChild(letra);
 };
};

/*selecciona una palabra al azar del array */
function palabraSecreta() {
 let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].split("");
 return palabra;
};



function tecladoLetra(event) {
 let letraNueva = event.key.toUpperCase();
 if (letraNueva.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraNueva)) {
  letraIngresada(letraNueva);
  console.log("precionaste: " + letraNueva);
 };
};



function letraIngresada(letra) {
 if (palabraRandom.includes(letra)) {
  letraCorrecta(letra);
 } else {
  console.log("letora er4ror");
  /* letraError(); */
  dibujarMuneco()
  mostrarErrores(letra)
 };
 letrasUsadas.push(letra);
};

function letraCorrecta(letra) {
 const arr = Array.from(document.querySelectorAll('#letras-palabra'));
 for (let i = 0; i < arr.length; i++) {
  if (arr[i].innerHTML === letra) {
   arr[i].classList.toggle('letra-oculta');
   letraAcertada = letraAcertada + 1;
  };
 };
 if (letraAcertada == arr.length) {
  console.log("Juego terminado");
  ganador();
  document.removeEventListener('keydown', tecladoLetra);
  /*  document.getElementById("letras-incorrectas").innerHTML = "Ganaste!!! Perro hpta!"; */
 };
};

function mostrarErrores(letra) {
 const letraRoja = document.createElement("span");
 letraRoja.innerHTML = letra;
 letraRoja.classList.add('letras-rojas');
 incorrectas.appendChild(letraRoja);
};

function juegoNuevo() {
 letrasUsadas = [];
 palabraRandom = [];
 letraSeleccionada = [];
 intentos = 0;
 letraAcertada = 0;
 limpiarCanvas()
 perdiste = false;
 vencedor = false;
 correctas.innerHTML = '';
 incorrectas.innerHTML = '';
 /* textinput.value=""; */
 document.addEventListener("keydown", tecladoLetra);
 dibujarMuneco();
 dibujarletra();
 lmpiarPerdedor();
 lmpiarGanador();
};

function retirarse() {
 let textinput = document.getElementById("palabra");
 textinput.value="";
 const inicio = document.getElementById("inicio");
 const juego = document.getElementById("juego");
 inicio.classList.remove("ocultar");
 inicio.classList.add("section-inicio");
 juego.classList.remove("section-jugo");
 juego.classList.add("ocultar");
 document.removeEventListener('keydown', tecladoLetra);
 letrasUsadas = [];
 palabraRandom = [];
 letraSeleccionada = [];
 intentos = 0;
 letraAcertada = 0;
 limpiarCanvas()
 perdiste = false;
 vencedor = false;
 correctas.innerHTML = '';
 incorrectas.innerHTML = '';
 lmpiarPerdedor();
 lmpiarGanador();
};

function ganador() {


 const winJuego = document.createElement("div");
 winJuego.textContent = "GANASTE!!";
 console.log("ganaste mk");
 ganado.append(winJuego);
 ganado.classList.add("ganaste")
 vencedor = true;
 return;
}

function perdedor() {
 const game = document.createElement("span");
 game.textContent = "PERDISTE!!";
 perdido.append(game);
 perdido.classList.add("perdiste")
 perdiste = true;
 return;
}

function limpiarCanvas() {
 pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}

function lmpiarPerdedor() {
 perdido.classList.remove("perdiste");
 removerHijos(perdido);
}

function lmpiarGanador() {
 ganado.classList.remove("ganaste");
 removerHijos(ganado);
}

function removerHijos(e) {
 if (e.hasChildNodes) {
  while (e.childNodes.length >= 1) {
   e.removeChild(e.firstChild);
  }
 }
 return;
}




//?parte de canvas
function dibujarMuneco() {
 if (intentos === 0) {
  pincel.beginPath();
  pincel.fillRect(0, 395, 500, 5);
  pincel.fillRect(100, 90, 5, 500);
  pincel.fill();
 };

 if (intentos === 1) {
  pincel.beginPath();
  pincel.fillRect(100, 90, 150, 5);
  pincel.fill();
 };
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
  document.removeEventListener('keydown', tecladoLetra);
  perdedor();
 }
 pincel.stroke();
 intentos = intentos + 1;
};



//TODO parte de agregar palabra
function agregarPalabra() {
 const inicio = document.getElementById("inicio");
 const agregar = document.getElementById("section-palabra");
 inicio.classList.remove("section-inicio");
 inicio.classList.add("ocultar");
 agregar.classList.remove("ocultar");
 agregar.classList.add("section-palabra");
};

function cancelar() {
 let textinput = document.getElementById("palabra");
 textinput.value="";
 const inicio = document.getElementById("inicio");
 const agregar = document.getElementById("section-palabra");
 inicio.classList.remove("ocultar");
 inicio.classList.add("section-inicio");
 agregar.classList.remove("section-palabra");
 agregar.classList.add("ocultar");
};


function guardarPalabra() {
 let textinput = document.getElementById("palabra").value.toUpperCase();
 let invalida = false;
 if(textinput!=""&& textinput.length<= 8){
  for(let i=0; i<textinput.length;i++){
   if(!textinput[i].match(/^[a-zñ]$/i)&&textinput[i]!=' '){
    invalida=true;
    console.log("esto es falso");
   }
  }
  if(invalida==false){
   arrayPalabras.push(textinput);
   textinput.value="";
   const juegoDos = document.getElementById("juego");
   const agregar = document.getElementById("section-palabra");
   agregar.classList.remove("section-palabra");
   agregar.classList.add("ocultar");
   juegoDos.classList.remove("ocultar");
   juegoDos.classList.add("section-juego");
   juegoNuevo();
  }else {
   const dialogo = document.querySelector('#dialog');
   dialogo.show()
   dialogo.addEventListener('click', () => dialogo.close());
  }
 }else {
  const dialogo = document.querySelector('#dialog2');
  dialogo.show()
  dialogo.addEventListener('click', () => dialogo.close());
 }
};

