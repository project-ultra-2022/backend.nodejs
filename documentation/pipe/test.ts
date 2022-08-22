console.log("Archivo de Pipe");

let ArrayRange: Array<number> = [];
function rangoHasta(desde: number, hasta: number): Array<number> {
  ArrayRange.push(desde);
  if (ArrayRange.length <= desde) rangoHasta(desde, hasta + 1);
  return ArrayRange;
}
console.log(rangoHasta(5, 10));
