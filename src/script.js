// Establece la fecha y hora a la que termina la cuenta atrás
var countDownDate = new Date("Apr 5, 2024 08:30:00").getTime();

// Actualiza la cuenta atrás cada 1 segundo
var x = setInterval(function() {

  // Obtiene la fecha y hora actuales
  var now = new Date().getTime();

  // Calcula la diferencia entre la fecha final y la actual
  var distance = countDownDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Formatea el tiempo restante en formato MM:SS
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Muestra el resultado en el elemento con id="base-timer-label"
  document.getElementById("base-timer-label").innerHTML = `${formatTime(days)} dias ${formatTime(hours)} horas ${formatTime(minutes)} minutos ${formatTime(seconds)}`;

  // Si la cuenta atrás termina, muestra un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("base-timer-label").innerHTML = "EXPIRADO";
  }
}, 1000);
