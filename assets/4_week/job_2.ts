/*
Palabra más larga

Haga que la función LongestWord(sen) tome el parámetro sen que se está pasando y devuelva el más largo
palabra en la cadena. Si hay dos o más palabras que tienen la misma longitud, devuelve la primera
palabra de la cadena con esa longitud. Ignore la puntuación y suponga que sen no estará vacío.
Las palabras también pueden contener números, por ejemplo: "Hello world123 567"

Ejemplos:
1. Entrada: fun&!! time
Salida: time

2. Entrada: I love dogs
Salida: love

Nota: Contar solo los caracteres que son letras y números, no simbolos
Dificultad: Fácil
*/

function longestWord(sen: string): string {
  console.log(sen);
  return "";
}

// No modificar, es solo para comprobar que el código funciona
[
  ["fun&!! time", "time"],
  ["I love dogs", "love"],
].forEach((test, i) => {
  console.log(
    longestWord(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});
