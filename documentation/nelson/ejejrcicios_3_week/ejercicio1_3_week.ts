/*
Quitar el indicativo de los teléfonos que lo tengan, devolver un array con todos los números corregidos

Respuesta final:

Array<string> = [
"7333333",
"3108719976",
"7123789",
"3108714564",
"3507192591",
"3777777",
];

*/

let telefonos: Array<string> = [
  "+57-7333333",
  "3108719976",
  "+52-7123789",
  "+1-3108714564",
  "3507192591",
  "+57-3777777",
];

let telefonosCorregidos: Array<string> = [];

function correccionTelefonos(arreglo: Array<string>) {
  for (let i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i].includes("-")) {
      let indice: string = arreglo[i].slice(arreglo[i].search("-") + 1);
      telefonosCorregidos.push(indice);
    } else {
      telefonosCorregidos.push(arreglo[i]);
    }
  }
}

correccionTelefonos(telefonos);

console.log(telefonosCorregidos);
