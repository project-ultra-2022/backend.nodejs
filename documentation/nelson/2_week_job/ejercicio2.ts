let arreglo: Array<number> = [];

function rangos(desde: number, hasta: number) {
  arreglo.push(desde);
  if (arreglo.length < hasta - desde + arreglo.length) rangos(desde + 1, hasta);
  return arreglo;
}

console.log(rangos(8, 15));
