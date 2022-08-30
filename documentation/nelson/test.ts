console.log("Archivo de Nelson");
let listaNelson: Array<number> = [];

function sumaNelson(num: number): number {
  listaNelson.push(num);
  if (listaNelson.length < num + listaNelson.length) sumaNelson(num - 1);
  return listaNelson.reduce((contador, item) => contador + item, 0);
}

console.log(sumaNelson(10));
