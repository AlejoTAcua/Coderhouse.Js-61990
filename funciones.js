const agregarDatosContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    setTimeout(() =>{
        window.location.href = "/"
    },1510)
}

const datosListaContactos = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) =>{
    let divContacto = document.createElement("div")
    let nombreContacto = document.createElement("h3")
    let apellidoContacto = document.createElement("h3")
    let numeroContacto = document.createElement("p")
    let iconoBorrar = document.createElement("span")

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    iconoBorrar.innerHTML = "delete"

    divContacto.classList.add("contactos")
    iconoBorrar.classList.add("material-symbols-outlined","icono")

    iconoBorrar.onclick = () =>{
        Swal.fire({
            title: "¿Estás seguro que quieres eliminar este contacto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Si, borralo!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed){
            Swal.fire({
                title: "¡Borrado!",
                text: "El contacto ha sido eliminado.",
                icon: "success"
            });
            setTimeout(() =>{
                db.removeItem(contacto.id)
                window.location.href = "/"
            },1510)}
        });
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}