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
    if((nombre.value == "") && (apellido.value == "") && (numero.value == "")) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese al menos dos datos",
        })
    } else if((apellido.value == "") && (numero.value == "")||(nombre.value == "") && (numero.value == "")||(nombre.value == "") && (apellido.value == "")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un dato más",
        })
    } else if(numero.value == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se puede guardar un contacto sin un número",
        })
    } else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contacto guardado correctamente",
            showConfirmButton: false,
            timer: 1500
        });
        agregarDatosContacto(db, contacto);
    }
}

datosListaContactos(db, contactosCelular)