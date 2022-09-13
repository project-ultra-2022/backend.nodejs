function longestWordSantiago(str: string): string {
  let guardarPalabra: Array<string> = str.split(" ");
  let palabra = "";
  let palabraMasLarga = "";
  let caracteresEspeciales = /[^\x20\x2D0-9A-z\x5Fa-z]/g;
  for (let i = 0; i < guardarPalabra.length; i++) {
    palabra = guardarPalabra[i].replace(caracteresEspeciales, "");
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  console.log(palabraMasLarga);
  return palabraMasLarga;
}

[
  ["fun&!! time", "time"],
  ["I love dogs", "love"],
].forEach((test, i) => {
  console.log(
    longestWordSantiago(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
