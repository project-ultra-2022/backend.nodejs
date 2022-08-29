let Rango: Array<number> = [];
function getRangodesde(desde: number, hasta: number): Array<number> {
  Rango.push(desde);
  if (Rango.length < hasta - desde + Rango.length)
    getRangodesde(desde + 1, hasta);
  return Rango;
}
console.log(getRangodesde(7, 20));
