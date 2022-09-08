let aux: any;
let min = 0;
let arrayBorrarSelena: Array<number> = [5, 4, 1, 2, 6, -4, -1];
let arrayMeterSelena: Array<number> = [];

let sizeLoop = arrayBorrarSelena.length;

for (let index = 0; index < sizeLoop; index++) {
  min = Math.min(...arrayBorrarSelena);
  arrayMeterSelena.push(min);
  arrayBorrarSelena.splice(arrayBorrarSelena.indexOf(min), 1);
}

aux = arrayMeterSelena;
console.log(aux);
