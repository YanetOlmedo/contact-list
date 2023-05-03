// Lista de contactos con datos predefinidos
let listaContactos = [
  { id: 1, nombre: "homero", apellido: "simpson", telefono: "12345678", ubicacion: { ciudad: "springfield", direccion: "evergreen terrace 742" } },
  { id: 2, nombre: "marge", apellido: "simpson", telefono: "12345678", ubicacion: { ciudad: "springfield", direccion: "evergreen terrace 742" } },
  { id: 3, nombre: "bart", apellido: "simpson", telefono: "12345678", ubicacion: { ciudad: "springfield", direccion: "evergreen terrace 742" } },
  { id: 4, nombre: "lisa", apellido: "simpson", telefono: "12345678", ubicacion: { ciudad: "springfield", direccion: "evergreen terrace 742" } },
  { id: 5, nombre: "maggie", apellido: "simpson", telefono: "1234678", ubicacion: { ciudad: "springfield", direccion: "evergreen terrace 742" } }
];

// Añadir un nuevo contacto a la lista. 
function agregarContacto() {
  let nuevoId = 5;
  let continuar = true;
  while (continuar) {
    let nom = prompt("Ingrese el nombre").toLowerCase(); //le pide al usuario que ingrese cada registro y pasamos todo a minuscula para igualar
    let ap = prompt("Ingrese el apellido").toLowerCase();
    let tel = prompt("Ingrese el teléfono del contacto sin guiones");
    let ciu = prompt("Ingrese la ciudad del contacto").toLowerCase();
    let direc = prompt("Ingrese la dirección").toLowerCase();

    let nuevoContacto = { id: nuevoId + 1, nombre: nom, apellido: ap, telefono: tel, ubicacion: { ciudad: ciu, direccion: direc } }; //asignamos los registros a un contacto
    
    listaContactos.push(nuevoContacto);
    nuevoId = nuevoId + 1;
    let r = prompt("Desea agregar otro contacto? (S/N)"); //si elije "S", se reinicia el ciclo
    if (r.toUpperCase() !== "S") { //si elije "N" continuar cambia a falso y sale del bucle.
      continuar = false;
    }
  }
}

// Borrar un contacto existente de la lista
function borrarContacto(nombre) {
  let indiceContacto = listaContactos.findIndex(contacto => { //busca el contacto
    return (contacto.nombre + " " + contacto.apellido) === nombre;
  });
  if ((indiceContacto !== -1)) { //si lo encuentra, lo borra
    console.log(nombre + " fue eliminado/a de la lista con éxito")
    return listaContactos.splice(indiceContacto, 1);
  }
}

// Imprimir los contactos en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of listaContactos) {
    console.log(contacto);
  }
}

function actualizarContacto() {
  let continuar = true;
  while (continuar) {
    let nombre = prompt("Ingrese el nombre y apellido del contacto que desea actualizar").toLowerCase();

    // Buscar el contacto
    let contacto = listaContactos.find((c) => {
      return (c.nombre + " " + c.apellido).toLowerCase() === nombre;
    });
  
    if (contacto) {
      let campo = prompt("Ingrese el campo que desea actualizar (nombre, apellido, telefono, ubicacion)").toLowerCase();
  
      if (campo === "nombre" || campo === "apellido" || campo === "telefono") {
        let nuevoValor = prompt("Ingrese el nuevo valor para el campo " + campo).toLowerCase();
  
        // Actualizar campo.
        contacto[campo] = nuevoValor;
  
        console.log(`El contacto de ${nombre} fue actualizado con éxito`);
      } else if (campo === "ubicacion") {
        let subCampo = prompt("Ingrese el campo de ubicación que desea actualizar (ciudad, direccion)");
  
        if (subCampo === "ciudad" || subCampo === "direccion") {
          let nuevoValor = prompt(`Ingrese el nuevo valor para el campo ${campo}: ${subCampo}`).toLowerCase();
  
          // Actualizar un subcampo dentro de la ubicacion
          contacto.ubicacion[subCampo] = nuevoValor;
  
          console.log(`El contacto de ${nombre} fue actualizado con éxito`);
        } else {
          console.log("Campo inválido"); //Validacion para campos inexistentes o incorrectos
        }
      } else {
        console.log("Campo inválido");
      }
    } else {
      console.log("No se encontró ningún contacto con ese nombre y apellido"); //validacion para conctactos inexistentes o incorrectos.
    }
    let r = prompt("Desea actualizar otro contacto? (S/N)"); //si elije "S", se reinicia el ciclo
    if (r.toUpperCase() !== "S") { //si elije "N", "continuar" cambia a falso y sale del bucle
      continuar = false;
    }

  }

}

// Testeo de funciones.
agregarContacto()
borrarContacto("maggie simpson");
actualizarContacto();
imprimirContactos();
