const botonEnviar = document.getElementById("botonenviar")
const botonBorrar = document.getElementById("botonborrar")
const edad = document.getElementById("tentacles")
const telefono = document.getElementById("telefono")
const locasion = document.getElementById("inputGroupSelect01")
const email = document.getElementById("email")
const apellido = document.getElementById("apellido")
const Nombre = document.getElementById("nombre")

function mostrarConsola(event) {
    event.preventDefault();
    console.log("Su Nombre es: ", nombre.value)
    console.log("Su Apellido es: ", apellido.value)
    console.log("Su Email es: ", email.value)
    console.log("La ciudad en la que vive es: ", locasion.value)
    console.log("Su telefono es: ", telefono.value)
    console.log("Su Edad es: ", edad.value);
}

if (botonEnviar.addEventListener("click", mostrarConsola)) {
    console.log
}



function eliminarInscrip(event) {
    event.preventDefault();

    let edad = document.getElementById("tentacles")
    let telefono = document.getElementById("telefono")
    let locasion = document.getElementById("inputGroupSelect01")
    let email = document.getElementById("email")
    let apellido = document.getElementById("apellido")
    let nombre = document.getElementById("nombre")

    edad.value = ""
    telefono.value = ""
    locasion.selectedIndex = ""
    email.value = ""
    apellido.value = ""
    nombre.value = ""
}
botonBorrar.addEventListener("click", eliminarInscrip);

