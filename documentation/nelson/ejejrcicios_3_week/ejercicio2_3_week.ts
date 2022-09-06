/*
Dado el siguiente array
Convertir las vocales en mayúscula, devolver array con todos los nombres corregidos
Respuesta final:

Array<string> = [
  "sAntIAgO",
  "pIpE",
  "EstEbAn",
  "sElEnA",
  "nElsOn",
  "dAnIEl",
];
*/

let estudiantes: Array<string> = [
  "santiago",
  "pipe",
  "esteban",
  "selena",
  "nelson",
  "daniel",
];

let vocalesEstudiantesMayusculas: Array<string> = [];

function vocalesMayusculas(arreglo: Array<string>) {
  for (let i = 0; i <= arreglo.length - 1; i++) {
    let stringProvicional: string = arreglo[i];
    let arregloProvicional: Array<any> = [];
    for (let j = 0; j <= stringProvicional.length - 1; j++) {
      arregloProvicional.push(stringProvicional[j]);
    }
    let nombreProvicional: string = "";
    for (let i = 0; i <= arregloProvicional.length - 1; i++) {
      if (
        arregloProvicional[i].includes("a") ||
        arregloProvicional[i].includes("e") ||
        arregloProvicional[i].includes("i") ||
        arregloProvicional[i].includes("o") ||
        arregloProvicional[i].includes("u")
      ) {
        nombreProvicional += arregloProvicional[i].toUpperCase();
      } else {
        nombreProvicional += arregloProvicional[i];
      }
    }
    vocalesEstudiantesMayusculas.push(nombreProvicional);
  }
}

vocalesMayusculas(estudiantes);
console.log(vocalesEstudiantesMayusculas);
