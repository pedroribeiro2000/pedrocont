var date = new Date('2020-01-01 00:03'); // Fecha con el tiempo que tenga tres minutos

// Función para rellenar con ceros
var padLeft = n => "00".substring(0, "00".length - n.length) + n;

// Asignar el intervalo a una variable para poder eliminar el intervalo cuando llegue al límite
var interval = setInterval(() => {
    // Asignar el valor de minutos
    var minutes = padLeft(date.getMinutes() + "");

    // Asignar el valor de segundos
    var seconds = padLeft(date.getSeconds() + "");

    console.log(minutes, seconds);

    // Restarle a la fecha actual 1000 milisegundos
    date = new Date(date.getTime() - 1000);

    // Si llega a 2:45, eliminar el intervalo
    if( minutes == '02' && seconds == '45' ) {
        clearInterval(interval);
    }
}, 1000);
