const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
const numero = document.querySelector(".numero")
const btnAgregar = document.querySelector(".btnAgregar")

const contactosCelular = document.querySelector(".lista")

const db = window.localStorage

btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(),
        nombre: nombre.value,
        apellido: apellido.value,
        numero: numero.value,
    }
    agregarDatosContacto(db, contacto)
}

datosListaContactos(db, contactosCelular)