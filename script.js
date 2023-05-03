// Lista de contactos con datos predefinidos
let listaContactos = [
  {nombre: "homero simpson", telefono: "12345678"},
  {nombre: "marge simpson", telefono: "2345678"},
  {nombre: "bart simpson", telefono: "34567890"},
  {nombre: "maggie simpson", telefono: "45678910"}
];

// Añadir un nuevo contacto a la lista. 
function agregarContacto() {
  let continuar = true;
  while (continuar) {
    let nom = prompt("Ingrese el nombre y apellido del contacto").toLowerCase();
    let tel = prompt("Ingrese el teléfono del contacto");
    let nuevoContacto = {nombre: nom, telefono: tel};
    
    listaContactos.push(nuevoContacto);
    let r = prompt("Desea agregar otro contacto? (S/N)"); //si elije "S", se reinicia el ciclo
    if (r.toUpperCase() !== "S") { //si elije "N" continuar cambia a falso y sale del bucle.
      continuar = false;
    }
  }

}


// Borrar un contacto existente de la lista
function borrarContacto(nombre) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].nombre === nombre) {
      listaContactos.splice(i, 1);
      break;
    }
  }
}

// Imprimir los contactos en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of listaContactos) {
    console.log(contacto);
  }
}

// Testeo de funciones.
agregarContacto()
borrarContacto("maggie simpson");
imprimirContactos();
