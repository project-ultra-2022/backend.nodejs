function findIntersectionNelson(strArr: Array<string>): Array<string> {
  let nuevoArray1: Array<string> = strArr[0].split("-");
  let nuevoArray2: Array<string> = strArr[1].split("-");
  let arrayInterseccion: Array<string> = [];

  for (let i = 0; i < nuevoArray1.length; i++) {
    for (let j = 0; j < nuevoArray2.length; j++) {
      if (nuevoArray2[j] == nuevoArray1[i]) {
        arrayInterseccion.push(nuevoArray2[j]);
      }
    }
  }
  return [arrayInterseccion.join("-")];
}

// No modificar, es solo para comprobar que el código funciona
[
  [
    ["1-3-4-7-13", "1-2-4-13-15"],
    ["1", "4", "13"],
  ],
  [
    ["1-3-9-10-17-18", "1-4-9-10"],
    ["1", "9", "10"],
  ],
  [["1,2,3", "4,5,6"], []],
].forEach((test, i) => {
  console.log(
    findIntersectionNelson(test[0])[0] == test[1][0]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
