const contactosCelular = [1,2,3,4,5,6,7]

const numeroBorrar = parseFloat(prompt("Ingrese el número que desea borrar"))
const contactoBuscado = contactosCelular.indexOf(numeroBorrar)
contactosCelular.splice(contactoBuscado,1)
console.log(contactoBuscado)
console.log(contactosCelular)