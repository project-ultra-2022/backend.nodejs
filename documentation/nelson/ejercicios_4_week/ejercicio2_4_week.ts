function longestWordNelson(str: string): string {
  let nuevoStr: Array<string> = str.split(" ");
  let palabraMasLarga: string = "";
  let palabra: string = "";
  let caracteres: RegExp = /[^\x20\x2D0-9A-z\x5Fa-z]/g;

  for (let i = 0; i < nuevoStr.length; i++) {
    palabra = nuevoStr[i].replace(caracteres, "");
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  console.log(palabraMasLarga);
  return palabraMasLarga;
}

// No modificar, es solo para comprobar que el código funciona
[
  ["fun&!! time", "time"],
  ["I love dogs", "love"],
].forEach((test, i) => {
  console.log(
    longestWordNelson(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
