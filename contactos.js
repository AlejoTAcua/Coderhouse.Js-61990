const contactosCelular = []

function agregarDatosContacto(nombre,apellido,numero){
    const contacto = {
        nombre:nombre,
        apellido:apellido,
        numero:numero,
    }
    contactosCelular.push(contacto)
}

function verListaContactos(){
    for(const contacto of contactosCelular){
        alert("Nombre: " + contacto.nombre + " Apellido: " + contacto.apellido + " Número: " + contacto.numero)
    }
}

function verDatosContacto(numero){
    for(const contacto of contactosCelular){
        if(contacto.numero == numero){
            alert("Nombre: " + contacto.nombre + " Apellido: " + contacto.apellido + " Número: " + contacto.numero)
        }
    }
}

function main(){
    let continuar = confirm("¿Quiere realizar una acción?")
    while(continuar){
        const accion = prompt("Elige la acción a realizar (crear, ver, borrar)")
        if(accion == "crear"){
            const nombreIngresado = prompt("Ingrese el nombre del contacto")
            const apellidoIngresado = prompt("Ingrese el apellido del contacto")
            const numeroIngresado = prompt("Ingrese el número del contacto")
            agregarDatosContacto(nombreIngresado,apellidoIngresado,numeroIngresado)
            verDatosContacto(numeroIngresado)
        }
        else if(accion == "ver"){
            const VerDatosIngresados = prompt("¿Quiere ver la lista o un contacto?")
            if(VerDatosIngresados == "lista"){
                verListaContactos()
            }else if(VerDatosIngresados == "contacto"){
                const numeroIngresado = prompt("Ingrese el número del contacto")
                verDatosContacto(numeroIngresado)
            }else{
                alert("Error")
            }
        }
        else if(accion == "borrar"){
            for (const contacto of contactosCelular) {
                const numeroBorrar = prompt("Ingrese el número que desea borrar")
                const contactoBuscado = contactosCelular.indexOf(numeroBorrar)
                contactosCelular.splice(contactoBuscado,1)
                alert("Número borrado")
            }
        }
        continuar = confirm("¿Quiere realizar otra acción?")
    }
}

main()