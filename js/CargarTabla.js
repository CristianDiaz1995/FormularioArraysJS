alert("hola");
var tabla = [
{Nombre:"HELDER", Apellido: "CASTRILLON", Telefono: 938 },
{Nombre:"POLLO", Apellido: "DIAZ", Telefono: 900 },
{Nombre:"HELDER", Apellido: "CASTRILLON", Telefono: 938 },
{Nombre:"POLLO", Apellido: "DIAZ", Telefono: 900 },
{Nombre:"HELDER", Apellido: "CASTRILLON", Telefono: 938 },
{Nombre:"POLLO", Apellido: "DIAZ", Telefono: 900 }
];

window.onload = cargarEventos;
function cargarEventos() {


	document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
	document.getElementById("nueva-persona").addEventListener("submit", nuevaPersona, false);
}


function mostrarTabla(){

var cuerpoTabla = document.getElementById("nombre-tabla");
var tablaLlena = "";

for (var i = 0; i < tabla.length; i++ ) {
     tablaLlena += "<tr><td>" + tabla[i].Nombre + "</td><td>" + tabla[i].Apellido + "</td><td>" + tabla[i].Telefono + "</td></tr>" ;
     }

cuerpoTabla.innerHTML = tablaLlena;
}


function nuevaPersona(event){

	event.preventDefault();

     var NombreDigitado = document.getElementById("nombre").value;
     var ApellidoDigitado = document.getElementById("apellido").value;
     var TelefonoDigitado = document.getElementById("telefono").value;

    var nuevaPersona = {Nombre: NombreDigitado, Apellido: ApellidoDigitado, Telefono: TelefonoDigitado};
	tabla.push(nuevaPersona);
}

