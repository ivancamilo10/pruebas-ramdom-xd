// Selecciona el elemento del lienzo (canvas)
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// Variables del juego
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var catImage = new Image();
catImage.src = "C:\Users\Windows 10\Downloads\music-gd4e53cf84_640.png";

// Dibuja el gato vomitando arcoíris en el lienzo
function drawCat() {
  ctx.drawImage(catImage, x, y, 80, 80);
}

// Función de animación del juego
function gameLoop() {
  // Limpia el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja el gato
  drawCat();

  // Actualiza la posición del gato
  x += dx;
  y += dy;

  // Detecta colisiones con los bordes del lienzo
  if (x + dx > canvas.width - 80 || x + dx < 0) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 80 || y + dy < 0) {
    dy = -dy;
  }

  // Solicita el siguiente fotograma de animación
  requestAnimationFrame(gameLoop);
}

// Inicia el juego
catImage.onload = function() {
  gameLoop();
};

