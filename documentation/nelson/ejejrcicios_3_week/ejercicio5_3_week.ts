/*
Escribir un programa en el que se pregunte al usuario por una frase y una letra,
y muestre por pantalla el número de veces que aparece la letra en la frase

## Ejemplos:

- cantidadLetrasEnFrase("Daniel es programador","a") -> 3
- cantidadLetrasEnFrase("Nelson es muy dedicado","d") -> 3
- cantidadLetrasEnFrase("Santiago es muy juicioso","o") -> 3
- cantidadLetrasEnFrase("Arctic Monkeys","s") -> 1
*/

let texto: string = "Daniel es programador";
let letra: string = "a";
let contador: number = 0;

function cantidadDeLetrasEnFrase(frase: string) {
  for (let i = 0; i <= frase.length - 1; i++) {
    if (frase[i] === letra) {
      contador += 1;
    }
  }
  console.log(
    "la letra",
    letra,
    "aparece",
    contador,
    "veces en la frase",
    "\n" + texto
  );
}

cantidadDeLetrasEnFrase(texto);
