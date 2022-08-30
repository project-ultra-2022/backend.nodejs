let rangoHasta: Array<number> = [];

function rango(num: number, desde: number = 0) {
  rangoHasta.push(desde);
  if (rangoHasta.length <= num) rango(num, desde + 1);
  return rangoHasta;
}

console.log(rango(7));
