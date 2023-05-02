// Crear una lista de contactos con datos predefinidos
let listaContactos = [
  {nombre: "Homero Simpson", telefono: "1234-5678"},
  {nombre: "Marge Simpson", telefono: "2345-678"},
  {nombre: "Bart Simpson", telefono: "3456-7890"},
  {nombre: "Maggie Simpson", telefono: "4567-8910"}
];

// Función para añadir un nuevo contacto a la lista. 
function agregarContacto() {
  let continuar = true;
  while (continuar) {
    let nom = prompt("Ingrese el nombre y apellido del contacto");
    let tel = prompt("Ingrese el teléfono del contacto");
    let nuevoContacto = {nombre: nom, telefono: tel};
    
    listaContactos.push(nuevoContacto);
    let r = prompt("Desea agregar otro contacto? (S/N)"); //si elije "S", se reinicia el ciclo
    if (r.toUpperCase() !== "S") { //si elije "N" continuar cambia a falso y sale del bucle.
      continuar = false;
    }
  }

}


// Función para borrar un contacto existente de la lista
function borrarContacto(nombre) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].nombre === nombre) {
      listaContactos.splice(i, 1);
      break;
    }
  }
}

// Función para imprimir los contactos en la lista
function imprimirContactos() {
  console.log("Contact List:");
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i].nombre + " - " + listaContactos[i].telefono);
  }
}

// Testeo de funciones.
agregarContacto()
borrarContacto("Maggie Simpson");
imprimirContactos();
