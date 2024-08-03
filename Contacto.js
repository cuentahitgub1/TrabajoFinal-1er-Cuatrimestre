let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let comentario = document.getElementById("comentario");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        informacion[0] = nombre.value;
        informacion[1] = apellido.value;
        informacion[2] = email.value;
        informacion[3] = telefono.value;
        informacion[4] = comentario.value;

        console.log(`Nombre: ${informacion[0]}, Apellido: ${informacion[1]}, Email: ${informacion[2]}, 
            Telefono: ${informacion[3]}, Comentario: ${informacion[4]}`);
        let blob = new Blob([informacion], {type: "text/plain;charset=utf=8"});

        saveAs(blob, "contacto.txt");
})
