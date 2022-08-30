let Rangohasta: Array<number> = [];

function getRangoHasta(indice: number, num1: number): Array<number> {
  Rangohasta.push(num1 + 1);
  if (Rangohasta.length < indice) getRangoHasta(indice, num1 + 1);
  return Rangohasta;
}
console.log(getRangoHasta(10, 0));
