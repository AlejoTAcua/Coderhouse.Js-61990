const agregarDatosContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = "/"
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
    iconoBorrar.classList.add("material-symbols-outline","icono")

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = "/"
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}